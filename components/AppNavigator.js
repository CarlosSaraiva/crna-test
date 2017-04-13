import { StackNavigator } from 'react-navigation'
import Main from './Main'

const AppNavigator = StackNavigator({
  Home: { screen: Main }
})

export default AppNavigator