import { combineEpics } from 'redux-observable'

//epics
import { epics as feed } from '../components/feed/store'

export default combineEpics(
  feed.fetchNotifications
)