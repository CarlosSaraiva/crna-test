//Actions
const LOGIN = 'login/LOGIN'

//Reducer
export default function reducer(state = {}, action = {}) {
  
  switch (action.type) {

    default: return state
  }

}

//Action creator
export function login() {
  return { type: LOGIN }
}