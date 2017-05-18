import { createSelector } from 'reselect'

//Actions
const UPDATE_TOKEN = 'github/UPDATE_TOKEN'

const initial = {
  token: null,
  authorizations: null
}

//Reducer
export const reducer = (state = initial, action) => {
  
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...action.state, token: action.token }

    default: 
      return state
  }

}

//Action creator
export const action = {

  updateToken(token) {
    return { 
      type: UPDATE_TOKEN,
      token
    }
  },

  getToken() {
    return createSelector(
      [state => state.token],
      token => token
    )
  }

}



