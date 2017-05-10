import React, { Component } from 'react'
import { View, Text }       from 'react-native'
import { connect }          from 'react-redux'
import PropTypes            from 'prop-types'
import { NavigationActions } from 'react-navigation'

class Splash extends Component {

  componentWillMount() {
    
    if(!this.props.rehydrated) return       

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: this.props.token.length > 0 ? 'home' : 'login' })
      ]
    })
    
    this.props.navigation.dispatch(resetAction)

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
  navigation: PropTypes.object,
  rehydrated: PropTypes.bool
}

export default connect(state => ({ token: state.github.token, rehydrated: state.app.rehydrated }))(Splash)