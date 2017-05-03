import { StackNavigator } from 'react-navigation'
import Main from './main'
import { Login } from './login'
import  { Github } from './github'

const reducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return (newState ? newState : state)
}

const AppNavigator = StackNavigator({
  login: { screen: Login },
  github: { screen: Github },
  home: { screen: Main }
},{
  initialRouteName: 'login'
})

export { AppNavigator, reducer }