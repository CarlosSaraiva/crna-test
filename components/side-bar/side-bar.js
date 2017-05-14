import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { View, Text, Image }       from 'react-native'
import { Avatar }           from 'react-native-elements'

class SideBar extends Component {

  render() {
    const { profile } = this.props
    
    return(
      <View>
        <Image
          source={{uri: profile.avatar_url}}
          style={{width: 50, height: 50}}
        />
        <Text>{profile.name}</Text>
        <Text>{profile.location}</Text>
        <Text>{profile.email}</Text>
      </View>
    )
  }
}

SideBar.propTypes = {
  profile: PropTypes.object
}

export default SideBar