import React, { Component } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

class Github extends Component {
  
  render() {
    return (
      <View >
        <Text style={styles.title}>Github Screen</Text>        
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

export default Github