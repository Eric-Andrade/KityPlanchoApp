import { Font } from 'expo';

const cachedFonts = fonts => 
    fonts.map(font => Font.loadAsync(font));

export const fontAssets = cachedFonts([
    { montserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf') },

    // * Source Sans Pro
    { sspRegular: require('../../assets/fonts/SourceSansPro-Regular.ttf') },

    // * Roboto 
    { robotoRegular: require('../../assets/fonts/Roboto/Roboto-Regular.ttf') },

]);