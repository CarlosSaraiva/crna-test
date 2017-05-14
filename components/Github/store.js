import { createSelector } from 'reselect'

//Actions
const UPDATE_TOKEN = 'github/UPDATE_TOKEN'

const initial = {
  token: null,
  profile: {}
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

const getToken = () => {
  return createSelector(
    [state => state.token],
    token => token
  )
} 

const action = { updateToken, getToken }

export { action , reducer }



