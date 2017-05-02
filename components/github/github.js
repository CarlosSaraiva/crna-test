import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WebView } from 'react-native'
import githubApi from '../lib/github-api.js'
 
class Github extends Component {

  constructor (props) {
    super(props)
    this.handleGithubRedirect = this.handleGithubRedirect.bind(this)
  }

  async handleGithubRedirect(event) {    
        
    if (event.nativeEvent) {
      let url = new URL(event.nativeEvent.url)
      let code = url.searchParams.get('code')
      
      if (code) { 
        let response = await githubApi.requestToken(code)
        this.props.updateToken(response.access_token)
      }    
    }
    
  }
 
  render() {    
    return (
      <WebView
        source={{uri: githubApi.AUTH_URL}}
        onLoadEnd={this.handleGithubRedirect}
      />
    )
  }
}

Github.propTypes = {
  updateToken: PropTypes.func
}

export default Github
