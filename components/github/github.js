import React, { Component }  from 'react'
import PropTypes             from 'prop-types'
import { WebView }           from 'react-native'
import githubApi             from '../lib/github-api.js'
import { NavigationActions } from 'react-navigation'
 
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
        this.props.navigation.navigate('splash')

        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'home'})
          ]
        })
        
        this.props.navigation.dispatch(resetAction)        
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
  updateToken: PropTypes.func,
  navigation: PropTypes.object
}

export default Github
