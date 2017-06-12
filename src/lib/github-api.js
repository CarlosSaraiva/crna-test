import axios from 'axios'
import Rx from 'rxjs/Rx'

const CLIENT_ID = '3958f13174e81fd43e0a'
const CLIENT_SECRET = 'c2a62e2c19142d7893b6625cb0a564da71989197'
const API_BASE_URL = 'https://api.github.com'
const SCOPE = ['notifications', 'user:email', 'user:follow', 'public_repo', 'repo', 'gist', 'read:repo_hook', 'read:org' ]

export const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE.join(' ')}`

let instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {
    'Accept': 'application/json'
  }
})

export function requestToken(code) {  
  return instance.post('https://github.com/login/oauth/access_token', {
    code:code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  })
  .then(response => response.data)
}

export function getUserProfile() {  
  return instance.get('/user')
}

export function updateToken(oauthToken) {
  instance.defaults.headers.common['Authorization'] = `token ${oauthToken}`
}

export function fetchNotifications() {  
  return instance.get('/notifications')
}

export function fetchNotifications$() {
  return Rx.Observable.fromPromise(fetchNotifications)
}

export function pollNotifications$() {
  return Rx.Observable.interval(5000)
    .flatMap(fetchNotifications)
    .map(response => response.data)
}

export function getAuthorizations() {
  return instance.get('/authorizations')    
}

export function addScope() {
  return instance.patch('/authorizations')
}

