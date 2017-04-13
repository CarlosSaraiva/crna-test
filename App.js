import React from 'react'
import { StyleSheet, Text, View, AppRegistry, WebView, AsyncStorage } from 'react-native'
import { Button, SideMenu } from 'react-native-elements'
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation'
import axios from 'axios'

//redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

//constants
const GITHUB_CLIENT_ID = '' //github client id goes here
const GITHUB_SECRET = '' //github secret id here

// create a component
class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  }
})

const AppNavigator = StackNavigator({
  Home: { screen: Main }
})

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return (newState ? newState : state)
}

//reducers
const reducers = {
  nav: navReducer
}

//store config
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

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
    );
  }
}

export default App