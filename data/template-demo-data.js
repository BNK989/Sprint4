
const gig = {
  _id: "i101",
  title: "I will design your logo",
  price: 12.16,
  owner: {
    "_id": "u101",
    "fullname": "Dudu Da",
    "imgUrl": "url",
    "level": "basic/premium",
    "rate": 4
  },
  daysToMake: 3,
  description: "Make unique logo...",
  // 
  whatIncluded: {
    ConceptIncluded: true,
    IncludeSourceFile: false,
    StationeryDesigns: true
  },
  // 
  avgResponseTime: 1,
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

// "reviews": [
//   {
//     "id": "123",
//     "txt": "Functional, clean, and delightful. A design that just works.",
//     "rate": 5,
//     "by": {
//       "_id": "FHc6T",
//       "fullname": "admin",
//       "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
//     }
//   },
//   {
//     "id": "124",
//     "txt": "Sleek and modern aesthetics. A joy to interact with.",
//     "rate": 5,
//     "by": {
//       "_id": "u101",
//       "fullname": "aviya",
//       "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
//     }
//   },
//   {
//     "id": "125",
//     "txt": "Innovative approach, visually striking. A design that captivates.",
//     "rate": 5,
//     "by": {
//       "_id": "FHc6T",
//       "fullname": "admin",
//       "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
//     }
//   },
//   {
//     "id": "126",
//     "txt": "Elegant and intuitive design. Seamless user experience.",
//     "rate": 5,
//     "by": {
//       "_id": "u101",
//       "fullname": "aviya",
//       "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
//     }
//   },
// ]


const orders = [
  {
    _id: "o1225",
    buyer: "mini-user",
    seller: "mini-user",
    gig: {
      _id: "i101",
      name: "Design Logo",
      imgUrl: "",
      price: 20
    },
    status: "pending/approved/rejected"
  }
]


const users = [
  {
    _id: "u101",
    fullname: "User 1",
    imgUrl: "/img/img1.jpg",
    username: "user1",
    password: "secret",
    level: "basic/premium",
    rate: 4
  },
]

const allTags = [
  "logo-design",
  "wordpress",
  "voice-over",
  "artisitic",
  "proffesional",
  "accessible",
]
function isPrimaryTag(tag) {
  return allTags.slice(0, 3).includes(tag)
}


// HomePage
//  list of gigs with link to gig-details

// Gig Details
// <pre>JSON, slowly improve

// UserDetails 
//  basic info
//  orderedGigs => orderService.query({userId: 'u101'})
//  ownedGigs => gigService.query({ownerId: 'u103'})

// GigEdit - make it super easy to add Gig for development

// GigList, GigOrder
// Order, confirm Order
// Lastly: GigExplore, Filtering


function loadApp() {
  socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) => {
    showSuccessMsg(`Another order was just made, check it out ${order.gig._id}`)
  })
}