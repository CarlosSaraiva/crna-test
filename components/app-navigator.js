import { StackNavigator } from 'react-navigation'
import Main from './main'
import { Login } from './login'
import  { Github } from './github'

const AppNavigator = StackNavigator({
  login: { 
    screen: Login,
    navigationOptions: (teste) => {
      return {
        title: 'teste',
        header: null
      }
    }
  },
  github: { screen: Github },
  home: { screen: Main }
})

export default AppNavigator