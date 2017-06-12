//Actions
const UPDATE = 'login/UPDATE'

//Reducer
const reducer = (state = {}, action = {}) => {
  
  switch (action.type) {
    case UPDATE:
      return {...action.state}

    default: 
      return state
  }

}

//Action creator
const action = {

  updateLogin: data => {
    return { 
      type: UPDATE,
      state: data
    }
  }

}

export { action, reducer }