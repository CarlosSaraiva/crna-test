import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, SideMenu } from 'react-native-elements'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }
  }

  handle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        menu={(<Text>Teste</Text>)}
      >
        <View style={styles.container}>        
          <Button
            large
            onPress={this.handle}
            icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
            title='OCTICON' />

          <Text>{this.state.isOpen ? 'Ola': 'Tchau'}</Text>
        </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
