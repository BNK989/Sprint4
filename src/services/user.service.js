import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const BASE_URL = 'auth/'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getById,
}

window.userService = userService
// _lodeUsersToStorage()

function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)
    if (user) return user
    // Returns nothing - if no user is found
}

async function login(userCred) {
    const user = await httpService.post(BASE_URL + 'login', userCred)
    if (user) return _setLoggedinUser(user)
}

async function signup(newUser) {
    if (!newUser.imgUrl) newUser.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await httpService.post(BASE_URL + 'signup', newUser )
    if (user) return _setLoggedinUser(user)

}

async function logout() {

    await httpService.post(BASE_URL + '/logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

// function _lodeUsersToStorage() {
//     let users = utilService.loadFromStorage('user')
//     if (!users || !users.length) {
//         users = usersDemo
//     }
//     utilService.saveToStorage('user', users)
// }

function _setLoggedinUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}



