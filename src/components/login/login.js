import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native'

class Login extends Component {
  
  static navigationOptions = () => {
    return {
      title: 'login',
      header: null
    }
  }  

  render() {
    const { navigation: { navigate }, token, isRehydrated } = this.props
    
    const loading = () => (
      <Text>loading...</Text>
    )

    const loginForm = () => (
      <View>
        <Text>App login</Text>
        <Button title="Login with Github" onPress={() => navigate('Github')}/>
      </View>
    )
    
    return (
      <View>
      {
        isRehydrated && !token ? loginForm() : loading()
      }
      </View>
    )
  }
}

Login.propTypes = {
  navigate: PropTypes.func,
  navigation: PropTypes.object,
  isRehydrated: PropTypes.bool,
  token: PropTypes.string
}

export default Login