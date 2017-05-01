import { loginReducer } from './login'
import { githubReducer } from './github'
import AppNavigator from './app-navigator'
import { combineReducers } from 'redux'

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return (newState ? newState : state)
}

const reducers = combineReducers({
  nav: navReducer,
  login: loginReducer,
  github: githubReducer
})

export default reducers