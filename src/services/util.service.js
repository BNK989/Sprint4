export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    capitalizeWords,
    getInitials,
    createRandomGig
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}


function getInitials(fullName) {
    const names = fullName.split(' ')
    const initials = names.map(name => name.charAt(0).toUpperCase())
    return initials.join('')
}

function removeDuplicates(array) {
    return Array.from(new Set(array));
}

function getRandomBool() {
    return Math.random() >= 0.5;
}


const categoryArr = ['Web Development', 'Graphic Design', 'Digital Marketing', 'Writing & Translation', 'Customer Service', 'Software Development', 'Selling & E-commerce', 'Photography', 'Video & Animation', 'Social Media']
const tagsArr = [
    "html",
    "css",
    "javascript",
    "react",
    "vue",
    "angular",
    "bootstrap",
    "photoshop",
    "illustrator",
    "wordpress",
    "seo",
    "digital marketing",
    "facebook ads",
    "youtube ads",
    "google ads",
    "email marketing",
    "graphics",
    "social media management",
    "copywriting",
    "content writing",
    "project management",
]
const ownersArr = [
    {
        _id: "FHc6T",
        fullname: "Dudu Da",
        imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
        level: 1,
        rate: 3,
        ordersCount: 3,
    },
    {
        _id: "u206",
        fullname: "John Doe",
        imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
        level: 3,
        rate: 5,
        ordersCount: 12,
    },
    {
        _id: "u207",
        fullname: "Julie Johnson",
        imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
        level: 1,
        rate: 3.5,
        ordersCount: 2,
    },
    {
        _id: "u208",
        fullname: "Alexander Davis",
        imgUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
        level: 2,
        rate: 4.2,
        ordersCount: 10,
    },
    {
        _id: "u209",
        fullname: "Samantha Brown",
        imgUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
        level: 3,
        rate: 4.7,
        ordersCount: 4,
    }
]
const countriesArr = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
    'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brazil',
    'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad',
    'Chile', 'China', 'Colombia', 'Comoros', 'Congo',
    'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
    'Eritrea', 'Estonia', 'Ethiopia',
    'Fiji', 'Finland', 'France', 'Gabon', 'Gambia',
    'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
    'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Israel', 'Italy',
    'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
    'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos',
    'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Macedonia',
    'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
    'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia',
    'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
    'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua',
    'Niger', 'Nigeria', 'North Korea', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay',
    'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda',
    'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa',
    'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia',
    'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan',
    'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria',
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste',
    'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda',
    'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
    'Uruguay', 'Uzbekistan',
    'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam',
    'Yemen', 'Zambia', 'Zimbabwe'
]
const reviewsArr = [
    {
        "id": "123",
        "txt": "Functional, clean, and delightful. A design that just works.",
        "rate": 5,
        "by": {
            "_id": "FHc6T",
            "fullname": "admin",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        }
    },
    {
        "id": "124",
        "txt": "Sleek and modern aesthetics. A joy to interact with.",
        "rate": 4,
        "by": {
            "_id": "u101",
            "fullname": "aviya",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        }
    },
    {
        "id": "125",
        "txt": "Innovative approach, visually striking. A design that captivates.",
        "rate": 5,
        "by": {
            "_id": "FHc6T",
            "fullname": "admin",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        }
    },
    {
        "id": "126",
        "txt": "Elegant and intuitive design. Seamless user experience.",
        "rate": 3,
        "by": {
            "_id": "u101",
            "fullname": "aviya",
            "imgUrl": "https://xsgames.co/randomusers/avatar.php?g=female"
        }
    },
  {
        "id": "127",
        "txt": "Amazing design. Great for a business that wants to make a great first impression.",
        "rate": 5,
        "by": {
            "_id": "u102",
            "fullname": "daniel",
            "imgUrl": "https://xsgames.co/randomusers/avatar.php?g=male"
        }
    },
    {
        "id": "128",
        "txt": "Beautiful design. A great choice for a personal website or social media",
        "rate": 4,
        "by": {
            "_id": "u103",
            "fullname": "jessica",
            "imgUrl": "https://xsgames.co/randomusers/avatar.php?g=female"
        }
    },
    {
        "id": "129",
        "txt": "Great work. The design is professional, modern and visually appealing.",
        "rate": 5,
        "by": {
            "_id": "u104",
            "fullname": "natalie",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        }
    },
]
const titlesArr = ['Create a professional social media strategy',
        'Write a compelling video script',
        'Design a cool website for a startup',
        'Create a beautiful and functional web application',
        'Write a catchy and effective sales copy',
        'Create a stunning YouTube video',
        'Design a visually stunning email campaign',
        'Create a captivating animated video',
        'Write a persuasive Instagram caption',
        'Create a beautiful and functional logo',
        'Write a captivating Facebook ad copy',
        'Design a visually stunning packaging design',
        'Create a professional infographic',
        'Write a persuasive blog post',
        'Create a beautiful and functional mobile application',
        'Design a stylish and functional e-commerce website',
        'Write a funny and engaging Instagram post',
        'Create a visually stunning presentation',
        'Design a stunning company logo',
        'Write a catchy and effective blog post',]

//MARK: createRandomGig
function createRandomGig(builder = {title, category, price, owner, daysToMake, description, whatIncluded, avgResponseTime, loc, imgUrls, tags, likedByUsers, reviews}) {
    return {
        // "_id": id || makeId(),
        "title": builder.title || titlesArr[getRandomIntInclusive(0, titlesArr.length - 1)],
        "category": builder.category || categoryArr[getRandomIntInclusive(0, categoryArr.length - 1)],
        "price": builder.price || getRandomIntInclusive(10, 2000),
        "owner": builder.owner || ownersArr[getRandomIntInclusive(0, 4)],
        "daysToMake": builder.daysToMake || getRandomIntInclusive(1, 8),
        "description": builder.description || makeLorem(),
        "whatIncluded": builder.whatIncluded || { ConceptIncluded: getRandomBool(), IncludeSourceFile: getRandomBool(), StationeryDesigns: getRandomBool() },
        "avgResponseTime": builder.avgResponseTime || getRandomIntInclusive(1, 10),
        "loc": builder.loc || countriesArr[getRandomIntInclusive(0, 100)],
        "imgUrls": builder.imgUrls || Array.from({ length: 5 }).map((_, i) => `https://source.unsplash.com/random/30${getRandomIntInclusive(0, 9)}%C3%9740${getRandomIntInclusive(0, 9)}`),
        "tags": builder.tags || removeDuplicates(Array.from({ length: getRandomIntInclusive(1, 5) }).map((_, i) => tagsArr[getRandomIntInclusive(0, tagsArr.length - 1)])),
        "likedByUsers": builder.likedByUsers || ["user23", "quick-user"],
        "reviews": builder.reviews || removeDuplicates(Array.from({ length: getRandomIntInclusive(1, 5) }).map((_, i) => reviewsArr[getRandomIntInclusive(0, reviewsArr.length - 1)])),
    }
}


function makeABunchOfGigs(n = 20) {
    return Array.from({ length: n }).map((_, i) => createRandomGig())
}

// createMyGig()
function createMyGig(){
    const newGig = createRandomGig({imgUrls: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/66145094/original/121043a9a3915d3e646bac32cb7dc6374f741e3b.jpg"]})
    console.log('new gig:', newGig)
    httpService.post('gig', newGig)
}

// Example usage:
const randomeGig = createRandomGig(
    "OXeMG8wNskc",
    "I will create professional logo and stationery",
    "Writing & Translation",
    50,
    {
        "ordersCount": 3,
        "_id": "FHc6T",
        "fullname": "Dudu Da",
        "imgUrl": "https://xsgames.co/randomusers/avatar.php?g=male",
        "level": 1,
        "rate": 4
    },
    6,
    "Make unique logo...",
    {
        "ConceptIncluded": true,
        "IncludeSourceFile": false,
        "StationeryDesigns": true
    },
    1,
    "Ghana",
    [
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/66145094/original/121043a9a3915d3e646bac32cb7dc6374f741e3b.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/66145094/original/121043a9a3915d3e646bac32cb7dc6374f741e3b.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185625048/original/a285c0a494a99a882761387348e6a99f9a041758.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185625048/original/a285c0a494a99a882761387348e6a99f9a041758.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/66145094/original/121043a9a3915d3e646bac32cb7dc6374f741e3b.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185625048/original/a285c0a494a99a882761387348e6a99f9a041758.jpg",
        "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/185625048/original/a285c0a494a99a882761387348e6a99f9a041758.jpg"
    ],
    ["Arts And Crafts", "Logo Design"],
    ["mini-user"],
    [
        {
            "id": "123",
            "txt": "Functional, clean, and delightful. A design that just works.",
            "rate": 5,
            "by": {
                "_id": "FHc6T",
                "fullname": "admin",
                "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }
        },
        {
            "id": "124",
            "txt": "Sleek and modern aesthetics. A joy to interact with.",
            "rate": 5,
            "by": {
                "_id": "u101",
                "fullname": "aviya",
                "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }
        },
        {
            "id": "125",
            "txt": "Innovative approach, visually striking. A design that captivates.",
            "rate": 5,
            "by": {
                "_id": "FHc6T",
                "fullname": "admin",
                "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }
        },
        {
            "id": "126",
            "txt": "Elegant and intuitive design. Seamless user experience.",
            "rate": 5,
            "by": {
                "_id": "u101",
                "fullname": "aviya",
                "imgUrl": "https://xsgames.co/randomusers/avatar.php?g=female"
            }
        }
    ]
);

