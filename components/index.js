//react
import React from 'react'
import { Provider } from 'react-redux'

//navigators
import { AppNavigator } from './app-navigator.js'
import App from './app-wrapper'

//store
import store from './config/store'

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App navigator={AppNavigator} />        
      </Provider>
    )
  }
}

export default Root