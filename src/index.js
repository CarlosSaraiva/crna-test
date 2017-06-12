//react
import React            from 'react'
import { Provider }     from 'react-redux'

//navigators
import RootNavigator    from './components/app/navigator'
import { AppContainer } from './components/app'

//store
import store            from './config'

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