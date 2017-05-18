import { pollNotifications$ } from '../lib/github-api'

//Actions
const FETCH   = 'notification/FETCH'
const POLLING = 'notificaiont/POLLING'
const SUCCESS = 'notification/FETCH_SUCCESS'
const FAILURE = 'notification/FETCH_FAILURE'

const init = {
  isFetching: false,  
}

//Reducer
export const reducer = (state = init, action) => {
  
  switch (action.type) {
    case FETCH:
      return { isFetching: true }

    case POLLING:
      return { isPolling: true}
    
    case SUCCESS:
      return { ...action.payload, isFetching: false }

    case FAILURE:
      return { ...state, error: { ...action.payload }, isFetching: false }

    default: 
      return state
  }

}

//Action creator
export const actions = {

  fetchNotifications() {
    return { 
      type: FETCH
    }
  },

  fetchSucceeded(payload) {
    return {
      type: SUCCESS,
      payload
    }
  },

  fetchFailure(payload) {
    return {
      type: FAILURE,
      payload
    }
  }

}

export const epics = {

  fetchNotifications(action$) {
    return action$.ofType(FETCH)      
      .flatMap(pollNotifications$)
      .map(actions.fetchSucceeded)
  }

}