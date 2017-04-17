import React, { Component } from 'react'
import { connect } from 'react-redux'
import loginStore from '../Login/store'
import { Button, Text, View, StyleSheet, Linking, WebView } from 'react-native'

const CLIENT_ID = ''
const REDIRECT_URI = ''


class Github extends Component {
  constructor(props) {
    super(props)
    
    this.handleGithubRedirect = ::this.handleGithubRedirect
  }

  componentDidMount() {
  }

  handleGithubRedirect (event) {
    console.log('onLoad', event)
  }
 
  render() {
    return (
      <WebView
        source={{uri: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`}}
        style={{marginTop: 20}}
        onLoad={this.handleGithubRedirect}
        automaticallyAdjustContentInsets={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        onShouldStartLoadWithRequest={false}
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
    updateLogin: (loginInfo) => {
      dispatch(loginStore.updateLogin(loginInfo))
    }

  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    redux: {
      state: stateProps,
      actions: dispatchProps
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Github)