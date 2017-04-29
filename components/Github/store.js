import githubApi from '../libs/github-api.js'

//Actions
const UPDATE_TOKEN = 'github/UPDATE_TOKEN'

const initial = {
  token: ''
}

//Reducer
const reducer = (state = initial, action) => {
  
  switch (action.type) {

    case UPDATE_TOKEN:
      return { ...action.state, token: action.token }

    default: 
      return state
  }

}

//Action creator
const updateToken = token => {
  return { 
    type: UPDATE_TOKEN,
    token
  }
}

const action = {
  updateToken
}

export { action , reducer }



