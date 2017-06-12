import { getUserProfile, getAuthorizations } from '../../lib/github-api'

//Actions
const REQUEST = 'profile/REQUEST'
const SUCCESS = 'profile/SUCCESS'
const FAIL    = 'profile/FAIL'

const init = {
  loading: false,
  requestFailed: false,
}

//Reducer
const reducer = (state = init, action) => {
  
  switch (action.type) {
    case REQUEST:
      return {...state, loading: action.loading }

    case SUCCESS:
      return {...state, ...action.payload }

    case FAIL:
      return {...state, requestFailed: action.failed, error: action.error }

    default: 
      return state
  }

}

//Action creator
const action = {

  request() {
    return { type: REQUEST, loading: true }
  },

  success(response) {
    return { type: SUCCESS, payload: response.data }
  },

  fail(error) {
    return { type: FAIL, failed: true, error }
  },

  getProfile() {
    return dispatch => {
      dispatch(this.request())
      return getUserProfile()
        .then(response => dispatch(this.success(response)))
        .catch(error => dispatch(this.fail(error)))
    }
  }

}

export { action, reducer }