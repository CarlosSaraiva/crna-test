import React, { Component }     from 'react'
import PropTypes                from 'prop-types'
import { addNavigationHelpers } from 'react-navigation'

class App extends Component {
  render() {
    const Navigator = this.props.navigator
    
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })} />
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object,
  navigator: PropTypes.func,
}

export default App