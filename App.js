import React from 'react';
import { StyleSheet, Text, View, AppRegistry, WebView, AsyncStorage } from 'react-native';
import { Button, SideMenu } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

const CLIENT_ID = //github client id goes here


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

    this.state = { logged: false}

  }

  onNavigationStateChange = async (navState, callback) => {
    let url = new window.URL(navState.url)
    let githubCode = url.searchParams.get('code')
    let isStored = await AsyncStorage.getItem('githubCode') === true
    
    if (githubCode && !isStored) {
      debugger
      await AsyncStorage.setItem('githubCode', githubCode)
      callback()
    }
    
  }

  render()   {
    const { navigate } = this.props.navigation
    
    return (
      <WebView
        source={{uri:`https://github.com/login/oauth/authorize?cliente_id=${CLIENTE_ID}`}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        onNavigationStateChange={navState => this.onNavigationStateChange(navState, () => navigate('Home'))}
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


