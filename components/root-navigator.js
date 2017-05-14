import { DrawerNavigator }   from 'react-navigation'
import { LoginContainer }   from './login'
import  { GithubContainer } from './github'
import HomeNavigator        from './home-navigator'
import { SideBarContainer }   from './side-bar'

const RootNavigator = DrawerNavigator({
  Login: { screen: LoginContainer },
  Github: { screen: GithubContainer },
  Home: { screen: HomeNavigator }
},{
  contentComponent: SideBarContainer
})

export default RootNavigator