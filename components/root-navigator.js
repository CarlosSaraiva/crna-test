import { StackNavigator } from 'react-navigation'
import { LoginContainer }          from './login'
import  { GithubContainer }        from './github'
import Splash             from './splash'
import HomeNavigator  from './home-navigator'

const RootNavigator = StackNavigator({
  splash: { screen: Splash },
  login: { screen: LoginContainer },
  github: { screen: GithubContainer },
  home: { screen: HomeNavigator }
},{
  initialRouteName: 'splash'
})


export default RootNavigator