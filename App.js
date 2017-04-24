//react
import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import {AsyncStorage} from 'react-native'

//redux
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'

//Containers
import AppNavigator from './components/AppNavigator'

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return (newState ? newState : state)
}

//reducers
import loginReducer from './components/Login/store'
import githubReducer from './components/Github/store'

const reducers = combineReducers({
  nav: navReducer,
  login: loginReducer,
  github: githubReducer
})
//store config
// const createStoreWithMiddleware = applyMiddleware(thunk)

// const store = createStoreWithMiddleware(reducer)

const store = createStore(reducers, {}, compose(
  autoRehydrate(),
  applyMiddleware(thunk)
))


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