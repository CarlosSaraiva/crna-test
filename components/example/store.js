//Actions
const ACTION_EXAMPLE = 'example/ACTION_EXAMPLE'

//Reducer
export const reducer = (state = {}, action = {}) => {
  
  switch (action.type) {
    case ACTION_EXAMPLE:
      return {...action.state}

    default: 
      return state
  }

}

//Action creator
export const action = {

  actionCreatorExample(data) {
    return { 
      type: ACTION_EXAMPLE,
      state: data
    }
  }

}