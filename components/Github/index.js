import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCode, updateToken } from './store'
import { Button, Text, View, StyleSheet, Linking, WebView } from 'react-native'

const CLIENT_ID = '3958f13174e81fd43e0a'
const REDIRECT_URI = 'exp://5q-b8q.carlossaraiva.crna-test.exp.direct:80'

class Github extends Component {

  constructor(props) {
    super(props)
    this.handleGithubRedirect = ::this.handleGithubRedirect
  }

  handleGithubRedirect(event) {
    if (!event.nativeEvent) return
    
    let url = new URL(event.nativeEvent.url)
    
    if(url.searchParams.get('code')) {
      this.props.updateCode(url.searchParams.get('code'))
    }

  }
 
  render() {
    return (
      <WebView
        source={{uri: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect`}}
        style={{marginTop: 20}}
        onLoadStart={e => this.handleGithubRedirect(e)}
        automaticallyAdjustContentInsets={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        scalesPageToFit={true}        
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCode: code => {
      dispatch(updateCode(code))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Github)