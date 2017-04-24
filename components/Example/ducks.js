//Actions
const TEST = 'login/TEST'

//Reducer
export default function reducer(state = {}, action = {}) {
  
  switch (action.type) {

    case TEST: 
      return { ...state }

    default: 
      return state
  }

}

//Action creator
export function login() {
  return { type: TEST }
}