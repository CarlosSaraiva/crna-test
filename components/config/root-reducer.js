import { combineReducers }    from 'redux'
import { reducer as login }   from '../login'
import { reducer as github }  from '../github'
import { reducer as app }     from '../app'
import { reducer as profile } from '../profile'

//Imports for react-navigation reducer
import RootNavigator from '../root-navigator'
import { NavigationActions } from 'react-navigation'

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
  profile
})

export default reducers