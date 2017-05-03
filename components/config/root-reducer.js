import { combineReducers } from 'redux'
import { reducer as nav } from '../app-navigator'
import { loginReducer as login } from '../login'
import { githubReducer as github } from '../github'

const reducers = combineReducers({
  nav,
  login,
  github
})

export default reducers