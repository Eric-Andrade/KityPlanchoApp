import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, EvilIcons, Entypo } from '@expo/vector-icons';
import { Keyboard, Platform, StatusBar, Text } from 'react-native';
import IconBadge from 'react-native-icon-badge'
import I18n from './i18n';
// import { connect } from 'react-redux';
import { colors } from './util/constants';
import ButtonHeader from './components/ButtonHeader';
import OrdersClientScreen from './screens/ClientScreens/OrdersClientScreen';
import ServicesScreen from './screens/ClientScreens/ServicesScreen';
import ServicesPScreen from './screens/ClientScreens/ServicesPScreen';
import HOrderScreen from './screens/HOrderScreen';
import MapScreen from './screens/MapScreen';
import InfoScreen from './screens/ClientScreens/InfoScreen';
import MeScreen from './screens/MeScreen';
import HowScreen from './screens/HowScreen';

const tabIcon = 27;
const slideIcon = 25;
// const {width} = Dimensions.get('window');
const badgeCounter = 21;
const language = [
    { lang: "English", code: "en" },
    { lang: "French", code: "fr" },
    { lang: "Spanish", code: "es" },
  ]

const TNavigator = createBottomTabNavigator({
    Services:{
        screen: ServicesScreen, 
        navigationOptions:() =>({
            title: `${I18n.t('services')}`,
            // header: null,
            // headerTitle: 'Servicios',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-basket' : 'ios-basket-outline'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    Map:{
        screen: MapScreen, 
        navigationOptions:() =>({
            title: `${I18n.t('map')}`,
            // header: null,
            // headerTitle: 'Mis pedidos mapa',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-map' : 'ios-map'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    Cards:{
        screen: OrdersClientScreen,
        navigationOptions:() =>({
            title: `${I18n.t('orders')}`,
            // headerTitle: 'Mis pedidos',
            tabBarIcon: ({ tintColor, focused }) =>( 
                // TODO: Obtener la suma de los pedidos pendientes de la API
                <IconBadge style={{marginBottom: 0}}
                    MainElement={
                        <Ionicons name={focused ? 'ios-list-box' : 'ios-list-box'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor, bottom: 0}} badgeCount={6}/>
                    }
                    BadgeElement={<Text style={{ color: focused ? colors.WHITE : colors.WHITE , fontSize: 10, fontFamily: 'robotoRegular'}}>{badgeCounter}</Text>}
                    IconBadgeStyle={
                        {
                        width: 18,
                        height: 19,
                        left: 12,
                        top: -5,
                        marginBottom: 0,
                        backgroundColor: focused ? 'red' : 'red',
                        borderWidth: 1,
                        borderColor: focused ?  colors.WHITE : colors.WHITE,
                        }
                    }
                    Hidden={badgeCounter === 0}
                />
            ),
        })
    },
    HowScreen:{
        screen: HowScreen, 
        navigationOptions:() =>({
            title: `${I18n.t('help')}`,
            // header: null,
            // headerTitle: 'Ayuda',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    
},{
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    // animationEnabled: true,
    initialRouteName: 'Services',
    // backBehavior: 'none',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.GRAY777,
        pressColor: colors.PRIMARY,
        indicatorStyle: { backgroundColor: colors.PRIMARY },
        style:{
            backgroundColor: colors.WHITE,
            height: 53,
            paddingVertical: 5,
            borderTopWidth: 2,
            borderTopColor: colors.PRIMARY,
        }
    }
});

const MeModal = createStackNavigator({
    Authentication: {
        screen: MeScreen,
        navigationOptions: () => ({
            headerRight: null,
            headerLeft: null
        })
    }
},
    { 
        headerMode: 'none',
        gesturesEnabled: true,
        mode: 'modal'
    }
);

export const SNavigator = createStackNavigator({
    Historical:{
        screen: TNavigator,
        navigationOptions: ({ navigation }) => ({
            // header: null,
            headerRight: (
                <ButtonHeader side="right" 
                onPress={() => { navigation.navigate('Me')}}>
                    <Text style={{fontSize: 15, color: colors.GRAY600, fontWeight: '500'}}>Eric Torres</Text>
                </ButtonHeader>
            ),
            // headerLeft: (
            //     <ButtonHeader side="left" 
            //     onPress={() => { navigation.navigate('DrawerOpen')}}>
            //         <Entypo name={Platform.OS === 'ios' ? 'menu' : 'dots-three-vertical'} size={Platform.OS === 'ios' ? 22 : 25} color={colors.WHITE}/>
            //     </ButtonHeader>
            // )
        })
    },
    Me:{
        screen: MeModal,
        navigationOptions:() => ({
            header: null
        })
    },
    HOrderScreen:{
        screen: HOrderScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: null,
            headerLeft: (
            <ButtonHeader side="left" onPress={() => {
                Keyboard.dismiss();
                navigation.goBack(null)
                }}>
                <Entypo name="chevron-thin-left" size={Platform.OS === 'ios' ? 20 : null} color={colors.WHITE}/>
            </ButtonHeader>
            )
        })
    },
    OrdersClientScreen:{
        screen: OrdersClientScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: null,
            headerLeft: (
            <ButtonHeader side="right" onPress={() => {
                Keyboard.dismiss();
                navigation.goBack(null)
                }}>
                <EvilIcons name="close" size={30} color={colors.WHITE}/>
            </ButtonHeader>
            )
        })
    },
    InfoScreen:{
        screen: InfoScreen,
        navigationOptions: ({navigation}) => ({
            headerRight: null,
            headerLeft: (
                <ButtonHeader side="left" onPress={() =>{
                    navigation.goBack(null) 
                    }}>
                    <Entypo name="chevron-thin-left" size={Platform.OS === 'ios' ? 20 : null} color={colors.WHITE} />
                </ButtonHeader>
            )
        })
    },
    // MapScreen:{
    //     screen: MapScreen,
    //     navigationOptions: () => ({
    //         headerRight: null,
    //         headerLeft: null
    //     })
    // },
    ServicesPScreen:{
        screen: ServicesPScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: null,
            headerLeft: (
            <ButtonHeader side="left" onPress={() => {
                Keyboard.dismiss();
                navigation.goBack(null)
                }}>
                <Entypo name="chevron-thin-left" size={Platform.OS === 'ios' ? 25 : null} color={colors.WHITE}/>
               
            </ButtonHeader>
            )
        })
    },

},{
    cardStyle: {        
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: colors.GRAY100
    },
    navigationOptions: () => ({
        headerStyle:{
            backgroundColor: colors.WHITERGBA,
        },
        headerTitleStyle:{
            color: colors.PRIMARY,
            fontSize: 20,
            fontWeight: '400',
            fontFamily: 'sspRegular'
        }
    }),
    gesturesEnabled: true,
    mode: 'modal'
})

class ClientNavigator extends Component {
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

    componentWillMount() {
        I18n.locale = "es"
    }

    onSelectLanguage() {
        return(
            language.map((data, i) => {
                
            })
        )
    }

  
    onSelectedLang(text) {
        this.setState({
        value: false,
        select: text
        })
        I18n.locale = text.code;
    }

    onLanguage() {
        this.setState({
            value: true
        })
    }

    render() {
        return (
            // <SNavigator/>
            <TNavigator/>
        );
    }
}

export default ClientNavigator;