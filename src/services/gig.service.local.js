
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { gigsDemo } from '../../data/gig-demo-data.js'

import data from '../../data/new-gig-demo-data.json'
// console.log('data:', data)
const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    addGigMsg,
    getDefaultFilter,
    allCategories

}
window.cs = gigService
_saveDemoData()

async function query(filterBy = { title: '', price: 0, daysToMake: 0 }, ownedGigsId) {
    // console.log('filterBy.price:',filterBy )

    var gigs = await storageService.query(STORAGE_KEY)
    if (ownedGigsId) {
        let userId = userService.getLoggedinUser()._id
        return gigs = gigs.filter(gig => gig.owner._id === userId)
    }
    if (filterBy.title) {
        const regex = new RegExp(filterBy.title, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.packages.basic.description))

    }
    if (filterBy.category) {
        const regex = new RegExp(filterBy.category.replace(/-/g, '&'), 'i')
        gigs = gigs.filter(gig => regex.test(gig.category))

    }
    if (filterBy.price) {
        console.log('filterBy.price:', filterBy.price)
        if (filterBy.price === 155) {

            gigs = gigs.filter(gig => gig.packages.basic.price <= filterBy.price)
        }
        else if (filterBy.price === 232) {

            gigs = gigs.filter(gig => gig.packages.basic.price >= 155 && gig.packages.basic.price <= 232)
        } else if (filterBy.price === 233) {
            gigs = gigs.filter(gig => gig.packages.basic.price >= filterBy.price)
        } else {
            gigs = gigs.filter(gig => gig.packages.basic.price <= filterBy.price)
        }

    }
    if (filterBy.daysToMake) {
        gigs = gigs.filter(gig => gig.packages.basic.daysToMake <= filterBy.daysToMake)
    }

    gigs = gigs.sort((gig1, gig2) => (gig1.owner.rate - gig2.owner.rate) * -1)


    return gigs
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await storageService.put(STORAGE_KEY, gig)
    } else {

        // Later, owner is set by the backend
        gig.owner = userService.getLoggedinUser()
        savedGig = await storageService.post(STORAGE_KEY, gig)
    }
    console.log('88 savedGig:', savedGig)
    return savedGig
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)
    if (!gig.msgs) gig.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)

    return msg
}

function getEmptyGig() {
    return {
        title: "",
        category: "",
        packages: {
            basic: {
                price: 0,
                description: "",
                whatIncluded: {
                    ConceptIncluded: false,
                    IncludeSourceFile: false,
                    StationeryDesigns: true
                },
                daysToMake: 0
            },
            standard: {
                price: 198,
                description: "Make unique logo...",
                whatIncluded: {
                    ConceptIncluded: false,
                    IncludeSourceFile: true,
                    StationeryDesigns: true
                },
                daysToMake: 5
            },
            premium: {
                price: 280,
            description: "Make unique logo...",
            whatIncluded: {
                ConceptIncluded: true,
                IncludeSourceFile: true,
                StationeryDesigns: true
            },
            daysToMake: 4
        }
    },
        owner: {
    _id: "FHc6T",
            fullname: "meni ko",
                imgUrl: "https://content.latest-hairstyles.com/wp-content/uploads/best-long-hairstyles-for-men.jpg",
                    level: 3,
                        rate: 5,
                            ordersCount: 5
    },
    avgResponseTime: 1,
        loc: "Ghana",
            imgUrls: [],
                tags: [],
                    likedByUsers: ["mini-user"],
                        reviews: []
}
}

function getDefaultFilter() {
    return { title: '', price: 0, creteAT: '', daysToMake: 0 }
}


function _saveDemoData() {
    let gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!gigs || !gigs.length) {
        gigs = gigsDemo

        utilService.saveToStorage(STORAGE_KEY, gigs)
    }
}


async function allCategories() {
    var gigs = await storageService.query(STORAGE_KEY)
    return gigs.reduce((accumulator, { category }) => {
        if (!accumulator.includes(category)) {
            accumulator.push(category)
        }
        return accumulator
    }, [])
}
