import { combineEpics } from 'redux-observable'

//epics
import { epics as feed } from '../feed/store'

export default combineEpics(
  feed.fetchNotifications
)