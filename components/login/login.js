import React, { Component } from 'react'
import { Button, Text, View, StyleSheet, Linking } from 'react-native'

class Login extends Component {    

  render() {
    const { navigate } = this.props.navigation

    return (
      <View >
        <Text>App login</Text>
        <Button title="Login with Github" onPress={() => navigate('github')}/>
      </View>
    )
  }
}

export default Login