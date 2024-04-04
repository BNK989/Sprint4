
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { gigsDemo } from '../../data/gig-demo-data.js'

const STORAGE_KEY = 'gig'



export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    addGigMsg,
    getDefaultFilter
}
window.cs = gigService
_saveDemoData()

async function query(filterBy = { title: '', price: 0 },ownedGigsId) {
    
    var gigs = await storageService.query(STORAGE_KEY)
    if(ownedGigsId){
        let userId =userService.getLoggedinUser()._id
        
      return  gigs = gigs.filter(gig=> gig.owner._id === userId)
        
    }else{
       if (filterBy.title) {
        const regex = new RegExp(filterBy.title, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description))
    }
    if (filterBy.price) {
        gigs = gigs.filter(gig => gig.price <= filterBy.price)
    } 
    }
    
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
        console.log('gig:',gig);
        // Later, owner is set by the backend
        gig.owner = userService.getLoggedinUser()
        savedGig = await storageService.post(STORAGE_KEY, gig)
    }
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
        price: '',
        owner: {},
        daysToMake: getRandomIntInclusive(3,10),
        description: makeLorem(10),
        avgResponseTime: getRandomIntInclusive(1,3),
        loc: "Ghana",
        imgUrls: [""],
        tags: [
          "Arts And Crafts", "Logo Design"
        ],
        likedByUsers: ['mini-user'],
        reviews: [
          {
            "id": "madeId",
            "txt": "Did an amazing work",
            "rate": 4,
            "by": {
              "_id": "u102",
              "fullname": "user2",
              "imgUrl": "/img/img2.jpg"
            }
          }
        ], 
      }
}

function getDefaultFilter() {
    return { title: '', price: 0, creteAT: '' }
}


function _saveDemoData() {
    let gigs = utilService.loadFromStorage(STORAGE_KEY)
    if (!gigs || !gigs.length) {
        gigs = gigsDemo
    
        utilService.saveToStorage(STORAGE_KEY, gigs)
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




