import { storageService } from './async-storage.service'
import { httpService } from './http.service'

import { usersDemo } from '../../data/user-demo-data'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    // changeScore
}

console.log('userDemo:', usersDemo)
window.userService = userService


function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}



async function getById(userId) {

    const user = await storageService.get('user', userId)
   
    // const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    const oldUser = await storageService.get('user', user._id)
   
const updatedUser = {...oldUser,...user}

    await storageService.put('user', user)

    // const user = await httpService.put(`user/${_id}`, {_id, score})

    // When admin updates other user's details, do not update loggedinUser
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) return saveLocalUser(user)
}

async function signup(userCred) {
    const users = await storageService.query('user')
    const existUser = users.find(user => user.username === userCred.username)
    if(existUser) throw err
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    if(userCred._id){
        const user = await storageService.post('user', userCred)
        return saveLocalUser(user)
    }
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // return await httpService.post('auth/logout')
}

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

/// user 

// {
//     _id: "u101",
//     fullname: "User 1",
//     imgUrl: "/img/img1.jpg",
//     username: "user1",
//     password: "secret",
//     level: "basic/premium",
//   }

function saveLocalUser(user) {
    
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, level: user.level,orders:user.orders }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


;(async ()=>{
    // await storageService.post('user', {_id:'u101', fullname: 'admin', username: 'meni', password:'123',imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"})
    await userService.signup(usersDemo[0])
    await userService.signup(usersDemo[1])
})()



