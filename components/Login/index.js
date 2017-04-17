import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Text, View, StyleSheet, Linking } from 'react-native'

class Login extends Component {  

  componentDidMount() {
    Linking.addEventListener('url', event => this.handleExternalRequest(event))
  }

  handleExternalRequest(event) {
    console.log('external request:', event)
    debugger
  }
    
  render() {
    const { navigate } = this.props.navigation

    return (
      <View >
        <Text style={styles.title}>App login</Text>
        <Button title="Login with Github" onPress={() => navigate('github')}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
})

export default Login