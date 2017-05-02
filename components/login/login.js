import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native'

class Login extends Component {

  static navigationOptions = () => {
    return {
      title: 'teste',
      header: null
    }
  }  

  componentWillMount() {
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View >
        <Text>App login</Text>
        <Button title="Login with Github" onPress={() => navigate('github')}/>
      </View>
    )
  }
}

Login.propTypes = {
  navigate: PropTypes.func,
  navigation: PropTypes.object
}

export default Login