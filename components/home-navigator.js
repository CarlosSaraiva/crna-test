import { DrawerNavigator }  from 'react-navigation'
import Main from './main'
import Drawer from './drawer'

const HomeNavigator = DrawerNavigator({
  main: { screen:  Main},
  drawer: { screen: Drawer }
},{
  initialRouteName: 'main'
})

export default HomeNavigator