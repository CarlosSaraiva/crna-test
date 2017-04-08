import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Button, SideMenu } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'


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
        <Text>Welcom {params.user}</Text>
      </View>
    )
  }
}


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Outro: { screen: OutroScreen }
})



export default App