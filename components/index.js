//react
import React from 'react'
import { Provider } from 'react-redux'

//navigators
import { AppNavigator } from './app-navigator.js'
import StoreNavigator from './config/store-navigator'

//store
import store from './config/store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StoreNavigator navigator={AppNavigator} />
      </Provider>
    )
  }
}

export default App