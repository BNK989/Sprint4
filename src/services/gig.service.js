import { httpService } from './http.service.js'

const BASE_URL = 'gig'

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


async function query(filterBy = { txt: '', category: '', price: 0, userId: '' }) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}
async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await httpService.put(`gig/${gig._id}`, gig)

    } else {
        savedGig = await httpService.post('gig', gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, { txt })
    return savedMsg
}

function getEmptyGig() {
    return {
        title: "",
        category: "",
        packages: {
            basic: {
                price: 999,
                description: "Make unique logo...",
                whatIncluded: {
                    ConceptIncluded: false,
                    IncludeSourceFile: false,
                    StationeryDesigns: true
                },
                daysToMake: 6
            },
            standard: {
                price: 250,
                description: "Make unique logo...",
                whatIncluded: {
                    ConceptIncluded: false,
                    IncludeSourceFile: true,
                    StationeryDesigns: true
                },
                daysToMake: 5
            },
            premium: {
                price: 299,
                description: "Make unique logo...",
                whatIncluded: {
                    ConceptIncluded: true,
                    IncludeSourceFile: true,
                    StationeryDesigns: true
                },
                daysToMake: 4
            }
        },
        owner: {},
        avgResponseTime: 1,
        loc: "USA",
        imgUrls: [],
        tags: [],
        likedByUsers: [],
        reviews: []
    }
}

function getDefaultFilter() {
    return { title: '', price: 0, creteAT: '', daysToMake: 0, ownedGigs: '' }
}

async function allCategories() {
    var gigs = await query()
    return gigs.reduce((accumulator, { category }) => {
        if (!accumulator.includes(category) && accumulator.length < 9) {
            accumulator.push(category)
        }
        return accumulator
    }, [])
}
