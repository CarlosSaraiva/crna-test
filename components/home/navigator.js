import { StackNavigator } from 'react-navigation'
import Main              from './feed'

const HomeNavigator = StackNavigator({
  Feed: { screen: Main }  
},{
  initialRouteName: 'Feed'
})

export default HomeNavigator