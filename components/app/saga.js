import { put, takeLatest, select } from 'redux-saga/effects'
import { action as appAction }     from './store'
import { action as profileAction } from '../profile'
import { updateToken }             from '../lib/github-api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* bootstrap() { 
  yield put(appAction.rehydratedApp(true))
  yield profile()
}

function* profile () {
  let store = yield select()
  if(store.github.token) {
    yield updateToken(store.github.token)
    yield put(profileAction.getProfile())
  }
}

function* appSaga() {
  yield takeLatest('persist/REHYDRATE', bootstrap)
  yield takeLatest('github/UPDATE_TOKEN', profile )
}

export default appSaga