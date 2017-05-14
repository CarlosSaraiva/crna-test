import React from 'react'
import { View, Text } from 'react-native'

class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = () => {
    return {
      title: 'home',
      header: null
    }
  }    

  render() {
    return (
      <View >
        <Text>Home</Text>
      </View>
    )
  }
}

// define your styles

export { Feed }