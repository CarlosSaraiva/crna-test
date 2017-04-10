import React from 'react';
import { StyleSheet, Text, View, AppRegistry, WebView, AsyncStorage } from 'react-native';
import { Button, SideMenu } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import axios from 'axios'

const GITHUB_CLIENT_ID = '' //github client id goes here
const GITHUB_SECRET = '' //github secret id here

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Welcome' }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button 
          onPress={() => navigate('Outro', { user: 'test' })}
          title="Outro"
        />
        <Button 
          onPress={() => navigate('Github')}
          title="Login Github"
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

class Github extends React.Component {
  
  constructor(props){
    super(props)

    this.state = { isStored: false}
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
    return AsyncStorage.getItem('GITHUB_DATA')
    
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
            if(await this.onLoad(navState)) navigate('Home')
          }
        }
      />
    )
  }

}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Outro: { screen: OutroScreen },
  Github: { screen: Github}
})



export default App


