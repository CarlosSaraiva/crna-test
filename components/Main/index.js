import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'home'})
      ]
    })
    
    // this.props.navigation.dispatch(resetAction)
    this.props.navigation.navigate('login')

  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  }
})

export default Main