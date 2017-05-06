import { combineReducers } from 'redux'
import { reducer as nav } from '../app-navigator'
import { loginReducer as login } from '../login'
import { githubReducer as github } from '../github'
import { reducer as app } from '../app-store'

const reducers = combineReducers({
  nav,
  login,
  github,
  app
})

export default reducers