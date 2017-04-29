import { connect } from 'react-redux'
import { action, reducer } from './store'
import Github from './github'

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateToken: code => {
      dispatch(action.updateToken(code))
    }
  }
}

const connectedGithub = connect(mapStateToProps, mapDispatchToProps)(Github)

export { action as githubAction, reducer as githubReducer, connectedGithub as Github }