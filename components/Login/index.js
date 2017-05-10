import { connect } from 'react-redux'
import { action, reducer } from './store'
import Login from './login'

const mapStateToProps = state => {
  return {
    token: state.github.token
  }
}

const LoginContainer = connect(mapStateToProps)(Login)

export { action, reducer, LoginContainer }