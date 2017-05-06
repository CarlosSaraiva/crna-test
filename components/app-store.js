//Actions
const REHYDRATED = 'app/REHYDRATED'

const inital = {
  rehydrated: false
}

//Reducer
const reducer = (state = inital, action) => {
  
  switch (action.type) {
    case REHYDRATED:
      return {...action.rehydrated}

    default: 
      return state
  }

}

//Action creator
const rehydratedApp = data => {
  return { 
    type: REHYDRATED,
    rehydrated: data
  }
}

const action = { rehydratedApp }

export { action, reducer }