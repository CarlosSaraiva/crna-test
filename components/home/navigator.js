import { StackNavigator } from 'react-navigation'
import { Feed }              from '../feed'

const HomeNavigator = StackNavigator({
  Feed: { screen: Feed }  
},{
  initialRouteName: 'Feed'
})

export default HomeNavigator