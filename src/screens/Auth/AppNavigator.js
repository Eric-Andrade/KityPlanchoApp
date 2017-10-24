import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import AuthenticationScreen from './AuthenticationScreen';
import Navigator,{SNavigator} from '../../navigation';

@connect(
    state => ({
      navigation: state.navigation,
      user: state.user,
    })
  )
  export default class AppNavigator extends Component {
    render() {
      const navigation = addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      });
  
      if (this.props.user.isLogged) {
        return <Navigator navigation={navigation} />
      }
  
      return <AuthenticationScreen />
    }
  }
  
  export const router = SNavigator.router;
  console.log(`AppNavigator: ${router}`)