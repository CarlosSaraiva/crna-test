import React from 'react';
import { StyleSheet, Text, View, AppRegistry, WebView, AsyncStorage } from 'react-native';
import { Button, SideMenu } from 'react-native-elements'
import { StackNavigator, TabNavigator } from 'react-navigation'
import axios from 'axios'

const GITHUB_CLIENT_ID = '' //github client id goes here
const GITHUB_SECRET = '' //github secret id here

class Bootstrap extends React.Component {

  render () {
    const { navigate } = this.props.navigation
    
    AsyncStorage.getItem('GITHUB_DATA', (data) => {
      if(data) 
        navigate('Main')
      else
        navigate('Login')
    })

    return (
      <Text>Loading </Text>
    )

  }

}

class LoginScreen extends React.Component {
  static navigationOptions = { title: 'Welcome' }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>Sign in with Github!</Text>
        <Button 
          onPress={() => navigate('Github')}
          title="login"
        />        
      </View>
    )
  }

}

class OutroScreen extends React.Component {
  static navigationOptions = { title: 'Outro!'}

  render() {
    const { params } = this.props.navigation.state
    
    return (
      <View> 
        <Text>Welcome {params.user}</Text>
      </View>
    )
  }
}

class RepositoriesScreen extends React.Component {

  render() {

    return (
      <View>
        <Text>Repositories Screen</Text>
      </View>

    )
  }
}

class FeedScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Feed'
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    },
  }

  render() {

    return (
      <View>
        <Text>Feed</Text>
      </View>
    )

  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Profile'
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    },
  }

  render() {

    return (
      <View>
        <Text>Profile</Text>
      </View>
    )

  }
}

class Github extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = { hasToken: false }
  }

  onLoad = async (navState, callback) => {
    let url = new window.URL(navState.nativeEvent.url)
    let githubCode = url.searchParams.get('code')

    if(!githubCode) return

    const githubApiJson = await axios({ 
      method: 'post', 
      url: 'https://github.com/login/oauth/access_token',
      data: {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_SECRET,
        code: githubCode,
        redirect_url: 'http://127.0.0.1'
      }
    })

    await AsyncStorage.setItem('GITHUB_DATA', githubApiJson.data)
    this.setState({ hasToken: true })
  }

  render()   {
    const { navigate } = this.props.navigation

    return (
      <WebView
        source={{uri:`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        onLoad={
          async navState => {
            // await this.onLoad(navState)
            // if(this.state.hasToken) navigate('Main')
            navigate('Main')
          }
        }
      />
    )
  }

}

const Main = TabNavigator({
  Feed: { screen: FeedScreen },
  Profile: { screen: ProfileScreen }
})

const App = StackNavigator({
  Bootstrap: { screen: Bootstrap },
  Login: { screen: LoginScreen },
  Main: { screen: Main },
  Github: { screen: Github }
})

export default App


