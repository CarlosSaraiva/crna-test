import axios from 'axios'
const CLIENT_ID = '3958f13174e81fd43e0a'
const CLIENT_SECRET = '7ea9a7313f3cd927716d2e77b6bc0d434bc77138'

let instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
})

function requestToken(code) {  
  return instance.post('https://api.github.com/login/oauth/access_token', {
    code:code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  })
}

function updateToken(oauthToken) {
  instance.defaults.headers.common['Authorization'] = `token ${oauthToken}`
}

export default {
  requestToken, updateToken
}