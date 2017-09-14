import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Provider } from 'react-redux';
import { UIManager } from 'react-native';
import AppNavigator from './src/navigation';
import store from './src/redux/store';
import { colors } from './src/util/constants';
import {fontAssets} from './src/util/fontAssets';
import { LoadingScreen } from './src/commons/LoadingScreen'

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  componentDidMount(){
    this._loadAssetAsync();
  }

  async _loadAssetAsync(){
    await Promise.all(fontAssets);
    this.setState({ fontLoaded: true });
  }

  render(){
    if(!this.state.fontLoaded){
      return <LoadingScreen size="large" color={colors.GRAY600}/>
    }
    return (

      <Provider store={store}>
        <ActionSheetProvider>    
          <ThemeProvider theme={colors}>
            <AppNavigator />
          </ThemeProvider>
        </ActionSheetProvider>
      </Provider>
    );
  }}