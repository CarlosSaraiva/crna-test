import { connect }         from 'react-redux'
import { action, reducer } from './store'
import Example             from './example'

const mapStateToProps = state => {
  return {
    token: state.github.token,
    isRehydrated: state.app.rehydrated
  }
}

const ExampleContainer = connect(mapStateToProps)(Example)

export { action, reducer, ExampleContainer }