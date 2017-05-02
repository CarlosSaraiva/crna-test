import { StackNavigator } from 'react-navigation'
import Main from './main'
import { Login } from './login'
import  { Github } from './github'

const AppNavigator = StackNavigator({
  login: { screen: Login },
  github: { screen: Github },
  home: { screen: Main }
},{
  initialRouteName: 'login'
})

export default AppNavigator