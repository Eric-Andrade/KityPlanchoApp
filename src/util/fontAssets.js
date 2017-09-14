import { Font } from 'expo';

const cachedFonts = fonts => 
    fonts.map(font => Font.loadAsync(font));

export const fontAssets = cachedFonts([
    { montserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf') },

    // * Source Sans Pro
    { sspRegural: require('../../assets/fonts/SourceSansPro-Regular.ttf') },

])