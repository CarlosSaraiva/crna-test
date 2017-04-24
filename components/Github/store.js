//Actions
const UPDATE_CODE = 'login/UPDATE_CODE'
const UPDATE_TOKEN = 'login/UPDATE_TOKEN'

const initial = {
  code: '',
  token: ''
}


//Reducer
export default function reducer(state = initial, action) {
  
  switch (action.type) {
    case UPDATE_CODE:
      return { ...state, code: action.code }

    case UPDATE_TOKEN:
      return { ...action.state, token: action.token }

    default: 
      return state
  }

}

//Action creator
export function updateCode(code) {
  return { 
    type: UPDATE_CODE,
    code
  }
}

export function updateToken(token) {
  return { 
    type: UPDATE_TOKEN,
    token
  }
}