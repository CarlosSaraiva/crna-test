import { AsyncStorage } from 'react-native'

//redux
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import logger from 'redux-logger'

//reducers
import reducers from './root-reducer'

const store = createStore(reducers, {}, compose(
  autoRehydrate(),
  applyMiddleware(thunk, logger)
))

if (module.hot) {
  module.hot.accept('./root-reducer', () => {
    const nextRootReducer = require('./root-reducer')
    store.replaceReducer(nextRootReducer)
  })
}

persistStore(store, { storage: AsyncStorage })

export default store