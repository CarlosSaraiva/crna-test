import { StackNavigator } from 'react-navigation'
import Main from './Main'
import Login from './Login'
import Github from './Github/index.js'

const AppNavigator = StackNavigator({
  login: { screen: Login },
  github: { screen: Github },
  home: { screen: Main }
})

export default AppNavigator