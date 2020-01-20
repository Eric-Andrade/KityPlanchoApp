import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Provider } from 'react-redux';
import { UIManager } from 'react-native';
import I18n from './src/i18n';
import AppNavigator from './src/screens/Auth/AppNavigator';
import store from './src/redux/store';
import { colors } from './src/util/constants';
import { fontAssets } from './src/util/fontAssets';
import { LoadingScreen } from './src/commons/LoadingScreen'
import Navigator from './src/navigationClient'
// import Navigator from './src/navigation'

const language = [
  { lang: "English", code: "en" },
  { lang: "French", code: "fr" },
  { lang: "Spanish", code: "es" },
]

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      fontLoaded: false,
      languages: [],
      value: false,
      langValue: "en",
      select: "Select language"
    }
    this.onLanguage = this.onLanguage.bind(this);
  }


  componentDidMount() {
    this._loadAssetAsync();
  }
  
  onSelectedLang(lang) {
    this.setState({
      value: false,
      select: lang
    })
    I18n.locale = lang.code;
  }

  onLanguage() {
    this.setState({
      value: true
    })
  }

  async _loadAssetAsync() {
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
          <ThemeProvider theme={ colors }>
            <Navigator />
          </ThemeProvider>
        </ActionSheetProvider>
      </Provider>
    );
  }} 