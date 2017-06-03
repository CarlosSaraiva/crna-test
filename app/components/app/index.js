import { connect } from 'react-redux'
import App         from './app'
import { action, reducer } from './store'
import saga from './saga'

const mapStateToProps = state => ({
  nav: state.nav
})

const AppContainer = connect(mapStateToProps)(App)

export { action, reducer, saga, AppContainer }