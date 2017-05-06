import React, { Component } from 'react'
import { View, Text }       from 'react-native'
import { connect }          from 'react-redux'
import PropTypes            from 'prop-types'

class Splash extends Component {

  componentWillMount() {
    debugger
    if(this.props.token.length > 0) {
      this.props.navigation.navigate('home')
    } else {
      this.props.navigation.navigate('login')
    }

  }

  render() {
    return(
      <View>
        <Text>App loading...</Text>
      </View>
    )
  }
}

Splash.propTypes = {
  token: PropTypes.string,
  navigation: PropTypes.object
}

export default connect(state => ({ token: state.github.token }))(Splash)