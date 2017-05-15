import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { Container, Content, Thumbnail, Text, H1, Card, CardItem, Icon, Right, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

class SideBar extends Component {

  render() {
    const { profile } = this.props
    
    return(
      <Container>
        <Content>
          <Grid>
            <Row>
              <Col size={100} style={{ alignItems: 'center' }}>
                <Thumbnail size={80} source={{uri: profile.avatar_url}} style={{ marginTop: 20 }} />
              </Col>
            </Row>            
              <Col size={100} style={{ alignItems: 'center' }}><Text style={{alignItems: 'center'}}>{profile.name}</Text></Col>                          
              <Col size={100} style={{ alignItems: 'center' }}><Text style={{fontSize: 11, alignItems: 'center'}}>{profile.email}</Text></Col>
              <Col size={100} style={{ alignItems: 'center' }}><Text style={{fontSize: 11, alignItems: 'center'}}>{profile.location}</Text></Col>
            <Row style={{marginTop: 20}}>
              <Col size={100}><Button full style={{backgroundColor: '#f7f7f7'}}><Text style={{color: 'black'}}>Settings </Text></Button></Col>
            </Row>
            <Row style={{marginTop: 0}}>
              <Col size={100}><Button full style={{backgroundColor: '#f7f7f7'}}><Text style={{color: 'black'}}>About </Text></Button></Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}

SideBar.propTypes = {
  profile: PropTypes.object
}

export default SideBar


