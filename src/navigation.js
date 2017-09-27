import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Ionicons, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Keyboard, Platform, StatusBar, Dimensions } from 'react-native';

import { colors } from './util/constants';
import ButtonHeader from './components/ButtonHeader';
import AboutUsScreen from './screens/AboutUsScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import HistoricalScreen from './screens/HistoricalScreen';
import HOrderScreen from './screens/HOrderScreen';
import InfoScreen from './screens/InfoScreen';
import MeScreen from './screens/MeScreen';
import MapScreen from './screens/MapScreen';
import OrdersClientScreen from './screens/OrdersClientScreen';
import ServicesPScreen from './screens/ServicesPScreen';
import ServicesScreen from './screens/ServicesScreen';
// import EmployeeHomeScreen from './screens/Employee.HomeScreen'
// import EmployeeOrderListScreen from './screens/Employee.OrdersListScreen';
// import EmployeeOrderDetailScreen from './screens/EmployeeOrderDetailScreen';
import HowScreen from './screens/HowScreen';

const tabIcon = 27;
const slideIcon = 25;
const {width} = Dimensions.get('window');


const TNavigator = TabNavigator({
    Map:{
        screen: MapScreen, 
        navigationOptions:() =>({
            title: 'Mapa',
            // header: null,
            headerTitle: 'Mapa',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-map' : 'ios-map-outline'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    Cards:{
        screen: HistoricalScreen,
        navigationOptions:() =>({
            title: 'Listado',
            headerTitle: 'Listado',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <Ionicons name={focused ? 'ios-list-box' : 'ios-list-box-outline'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}} badgeCount={6}/>
            )
        })
    },
    HOrderScreen:{
        screen: HOrderScreen,
        navigationOptions:() =>({
            title: 'Pedido',
            headerTitle: 'Pedido',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <MaterialIcons name={focused ? 'account-circle' : 'account-circle'} size={Platform.OS === 'ios' ? 24 : 24} style={{color: tintColor}}/>
            )
        })
    }
},{
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    initialRouteName: 'Map',
    // backBehavior: 'none',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.GRAY600,
        pressColor: colors.PRIMARY,
        indicatorStyle: { backgroundColor: colors.PRIMARY },
        style:{
            backgroundColor: colors.WHITE,
            height: 50,
            paddingVertical: 5,
            borderTopWidth: 2,
            borderTopColor: colors.PRIMARYRGBA,
        }
    }
});

const DNavigator = DrawerNavigator({
    Orders:{
        screen: TNavigator,
        path: '/',
        navigationOptions:() =>({
            title: 'Pedidos',
            drawerLabel: 'Pedidos',
            drawerIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-map' : 'ios-map-outline'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
            )
        })
    }, 
    ServicesScreen:{
        screen: ServicesScreen,
        path: '/services',
        navigationOptions:() =>({
            title: 'Servicios',
            drawerLabel: 'Servicios',
            drawerIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-basket' : 'ios-basket-outline'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    AuthenticationScreen:{
        screen: AuthenticationScreen,
        path: '/me',
        navigationOptions:() =>({
            title: 'Mi cuenta',
            drawerLabel: 'Mi cuenta',
            drawerIcon: ({ tintColor, focused }) => ( 
                <EvilIcons name={focused ? 'user' : 'user'} size={Platform.OS === 'ios' ? 28 : 24} style={{color: tintColor}}/>
            )
        })
    },
    OrdersClientScreen:{
        screen: OrdersClientScreen,
        path: '/myorders',
        navigationOptions:() =>({
            title: 'Mis pedidos',
            drawerLabel: 'Mis pedidos',
            drawerIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-list-box' : 'ios-list-box-outline'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    How:{
        screen: HowScreen,
        path: '/how',
        navigationOptions:() =>({
            title: 'Como funciona',
            drawerLabel: 'Como funciona',
            drawerIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    AboutUsScreen:{
        screen: AboutUsScreen,
        path: '/about',
        navigationOptions:() =>({
            title: 'Acerca de',
            drawerLabel: 'Acerca de',
            drawerIcon: ({ tintColor, focused }) => ( 
                <MaterialCommunityIcons name={focused ? 'vector-union' : 'vector-union'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
            )
        })
    }
},{
    headerMode: 'none',
    initialRouteName: 'Orders',
    drawerPosition: 'left',
    drawerWidth: 215,
    useNativeAnimations: true,
    contentOptions:{
        activeTintColor: colors.WHITE,
        activeBackgroundColor: colors.PRIMARY,
        inactiveTintColor: colors.GRAY600,
    labelStyle:{
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'sspRegular'
    },
    style:{
        marginVertical: 100,
        marginHorizontal: 0
      }},
    
})

const AuthenticationModal = StackNavigator({
    Authentication: {
        screen: AuthenticationScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <ButtonHeader side="right" onPress={() => {
                    Keyboard.dismiss();
                    navigation.goBack(null)
                    }}>
                    <EvilIcons name="close" size={30} color={colors.WHITE}/>
                </ButtonHeader>
            ),
            headerLeft: null
        })
    }
},
    { headerMode: 'none'}
);

const SNavigator = StackNavigator({
    Historical:{
        screen: DNavigator,
        navigationOptions: ({ navigation }) => ({
            // header: null,
            headerRight: (
                <ButtonHeader side="right" 
                onPress={() => { navigation.navigate('Authentication')}}>
                    <MaterialCommunityIcons name='plus' size={Platform.OS === 'ios' ? tabIcon : 25} color={colors.WHITE}/>
                </ButtonHeader>
            ),
            headerLeft: (
                <ButtonHeader side="left" 
                onPress={() => { navigation.navigate('DrawerOpen')}}>
                    <Entypo name={Platform.OS === 'ios' ? 'menu' : 'dots-three-vertical'} size={Platform.OS === 'ios' ? 22 : 25} color={colors.WHITE}/>
                </ButtonHeader>
            )
        })
    },
    Authentication:{
        screen: AuthenticationModal,
        navigationOptions:() => ({
            title: 'Ingresar',
            header: null
        })
    }
},{
    cardStyle: {        
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: colors.GRAY100
    },
    navigationOptions: () => ({
        headerStyle:{
            backgroundColor: colors.PRIMARY,
        },
        headerTitleStyle:{
            color: colors.WHITE,
            fontSize: 20,
            fontWeight: '400',
            fontFamily: 'sspRegular'
        }
    }),
    gesturesEnabled: true,
    mode: 'modal',
})

class AppNavigator extends Component {
    render() {
        return (
            <SNavigator/>
        );
    }
}

export default AppNavigator;