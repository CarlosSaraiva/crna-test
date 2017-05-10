import { put, takeLatest } from 'redux-saga/effects'
import { action } from './store'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* rehydrated() {    
  yield put(action.rehydratedApp(true))
}

function* appSaga() {
  yield takeLatest('persist/REHYDRATE', rehydrated)
}

export default appSaga