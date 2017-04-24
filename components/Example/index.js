import React, { Component } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { Constants, WebBrowser } from 'expo'

class Example extends Component {
  
  render() {
    return (
      <View >
        <Text style={styles.title}>Example: Github login</Text>
        <Button title="Login with Github" />
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

export default Example