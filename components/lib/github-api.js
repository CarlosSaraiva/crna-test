import axios from 'axios'
const CLIENT_ID = '3958f13174e81fd43e0a'
const CLIENT_SECRET = 'c2a62e2c19142d7893b6625cb0a564da71989197'
const API_BASE_URL = 'https://api.github.com'
const AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`

let instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {
    'Accept': 'application/json'
  }
})

function requestToken(code) {  
  return instance.post('https://github.com/login/oauth/access_token', {
    code:code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  })
  .then(response => response.data)
}

function updateToken(oauthToken) {
  instance.defaults.headers.common['Authorization'] = `token ${oauthToken}`
}

export default { requestToken, updateToken, AUTH_URL }