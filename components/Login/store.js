//Actions
const UPDATE = 'login/UPDATE'

//Reducer
export default function reducer(state = {}, action = {}) {
  
  switch (action.type) {
    case UPDATE:
      return {...action.state}

    default: 
      return state
  }

}

//Action creator
export function updateLogin(data) {
  return { 
    type: UPDATE,
    state: data
  }
}