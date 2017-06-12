import React, { Component }  from 'react'
import PropTypes             from 'prop-types'
import { WebView }           from 'react-native'
import { AUTH_URL, requestToken }         from '../../lib/github-api.js'
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
        let response = await requestToken(code)
        this.props.updateToken(response.access_token)
        let reset = NavigationActions.reset({ index: 0, actions: [NavigationActions.navigate({ routeName: 'Feed' })] })
        this.props.navigation.dispatch(reset)
      }    
    }
    
  }
 
  render() {    
    return (
      <WebView
        source={{uri: AUTH_URL}}
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
