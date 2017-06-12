import { AsyncStorage }                from 'react-native'

//redux
import { 
  createStore, 
  applyMiddleware, 
  compose }                            from 'redux'

import thunk                           from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger }                from 'redux-logger'
import createSagaMiddleware            from 'redux-saga'
import { createEpicMiddleware }        from 'redux-observable'

//reducers
import reducers from './root-reducer'

//sagas
import { saga as appSaga } from '../components/app'

//epic
import epics from './root-epic'

//logger
const logger = createLogger({
  collapsed: true,
  duration: true
})

//middlewares
const saga = createSagaMiddleware()
const epicMiddleware = createEpicMiddleware(epics)

//store
const store = createStore(reducers, {}, compose(
  autoRehydrate(),
  applyMiddleware(thunk, logger, saga, epicMiddleware)
))

if (module.hot) {
  module.hot.accept('./root-reducer', () => {
    const nextRootReducer = require('./root-reducer')
    store.replaceReducer(nextRootReducer)
  })

  module.hot.accept('./root-epic', () => {
    const nextEpic = require('./root-epic').default
    epicMiddleware.replaceEpic(nextEpic)
  })  
}

saga.run(appSaga)
persistStore(store, { storage: AsyncStorage })

export default store