import { StackNavigator } from 'react-navigation'
import Main               from './main'
import { Login }          from './login'
import  { Github }        from './github'
import Splash             from './splash'

const reducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return (newState ? newState : state)
}

const AppNavigator = StackNavigator({
  splash: { screen: Splash },
  login: { screen: Login },
  github: { screen: Github },
  home: { screen: Main }
},{
  initialRouteName: 'splash'
})

export { AppNavigator, reducer }