import { combineReducers }    from 'redux'
import { NavigationActions } from 'react-navigation'

//reducers
import { reducer as login }   from '../components/login'
import { reducer as github }  from '../components/github'
import { reducer as app }     from '../components/app'
import { reducer as profile } from '../components/profile'
import { reducer as feed }    from '../components/feed/store'

//Imports for react-navigation reducer
import RootNavigator from '../components/app/navigator'

const tempState = RootNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }))
const initialNavState = RootNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), tempState)

const nav = (state = initialNavState, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state)
  return (newState ? newState : state)
}

const reducers = combineReducers({
  nav,
  login,
  github,
  app,
  profile,
  feed
})

export default reducers