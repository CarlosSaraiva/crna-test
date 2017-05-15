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

//logger
const logger = createLogger({
  collapsed: true,
  duration: true
})

//reducers
import reducers from './root-reducer'

//sagas
import { saga as appSaga } from '../app'

//sagas
const saga = createSagaMiddleware()

//store
const store = createStore(reducers, {}, compose(
  autoRehydrate(),
  applyMiddleware(thunk, logger, saga)
))

if (module.hot) {
  module.hot.accept('./root-reducer', () => {
    const nextRootReducer = require('./root-reducer')
    store.replaceReducer(nextRootReducer)
  })
}

saga.run(appSaga)
persistStore(store, { storage: AsyncStorage })

export default store