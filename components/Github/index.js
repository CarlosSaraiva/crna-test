import { connect } from 'react-redux'
import { action, reducer } from './store'
import Github from './github'

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateToken: code => {
      dispatch(action.updateToken(code))
    },
    getToken: () => {      
      return ownProps.github.token
    }
  }
}

const GithubContainer = connect(mapStateToProps, mapDispatchToProps)(Github)

export { action, reducer, GithubContainer }