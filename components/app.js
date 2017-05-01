//react
import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { AsyncStorage } from 'react-native'

//redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import logger from 'redux-logger'

//Containers
import AppNavigator from './app-navigator'

//reducers
import reducers from './root-reducer'

//store config
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

persistStore(store, {storage: AsyncStorage}, () => console.log('State restored!'))

@connect(state => ({
  nav: state.nav,
}))

class AppWithNavigationState extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App