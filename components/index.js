//react
import React            from 'react'
import { Provider }     from 'react-redux'

//navigators
import RootNavigator    from './root-navigator.js'
import { AppContainer } from './app'

//store
import store            from './config'

  // var config = {
  //   apiKey: "AIzaSyBRbt-w9ztAbeTSXVhXjJQ3jOY3sUlZR2g",
  //   authDomain: "github-issues-6d91e.firebaseapp.com",
  //   databaseURL: "https://github-issues-6d91e.firebaseio.com",
  //   projectId: "github-issues-6d91e",
  //   storageBucket: "github-issues-6d91e.appspot.com",
  //   messagingSenderId: "784964183286"
  // };
  // firebase.initializeApp(config);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer navigator={RootNavigator} />        
      </Provider>
    )
  }
}

export default Root