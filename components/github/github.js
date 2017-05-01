import React, { Component } from 'react'
import { Button, Text, View, StyleSheet, Linking, WebView } from 'react-native'
import githubApi from '../libs/github-api'
 
const CLIENT_ID = '3958f13174e81fd43e0a'

class Github extends Component {

  constructor(props) {
    super(props)
    this.handleGithubRedirect = this.handleGithubRedirect.bind(this)
  }

  handleGithubRedirect(event) {    
        
    if (event.nativeEvent) {
      let url = new URL(event.nativeEvent.url)
      let code = url.searchParams.get('code')
      
      if(code) {
        this.props.navigation.navigate('home')

        githubApi.requestToken(code)
          .then(response => {
          })
          .catch(error => {
          })
        
      }
    }
    return 
  }
 
  render() {    
    return (
      <WebView
        source={{uri: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`}}
        onLoadEnd={this.handleGithubRedirect}
      />
    )
  }
}

export default Github
