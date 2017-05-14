import { connect }         from 'react-redux'
import { action, reducer } from './store'
import SideBar             from './side-bar'

const mapStateToProps = state => {
  return {
    profile: state.profile    
  }
}

const SideBarContainer = connect(mapStateToProps)(SideBar)

export { action, reducer, SideBarContainer }