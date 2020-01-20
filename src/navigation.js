import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons, EvilIcons, Entypo } from '@expo/vector-icons';
import { Keyboard, Platform, StatusBar, Text } from 'react-native';
import IconBadge from 'react-native-icon-badge';
// import { connect } from 'react-redux';
import { colors } from './util/constants';
import ButtonHeader from './components/ButtonHeader';
import HistoricalScreen from './screens/EmployeeScreens/HistoricalScreen';
import HOrderScreen from './screens/HOrderScreen';
import InfoScreen from './screens/ClientScreens/InfoScreen';
import MeScreen from './screens/MeScreen';
import MapScreen from './screens/MapScreen';
import OrdersClientScreen from './screens/ClientScreens/OrdersClientScreen';
import ServicesPScreen from './screens/ClientScreens/ServicesPScreen';
import HowScreen from './screens/HowScreen';
// import { fetchsumaPDPR } from './screens/redux/actions';

// import EmployeeHomeScreen from './screens/Employee.HomeScreen'
// import EmployeeOrderListScreen from './screens/Employee.OrdersListScreen';
// import EmployeeOrderDetailScreen from './screens/EmployeeOrderDetailScreen';

const majorVersionIOS = parseInt(Platform.Version, 10);
const tabIcon = 27;
const slideIcon = 25;
const Badgecontador = 18;
// const {width} = Dimensions.get('window');

// @connect(state => ({
//     sumapdpr: state.employeeorderscount.sumapdpr
//     }),
//     { fetchsumaPDPR })

const TNavigator = createBottomTabNavigator({
    Map:{
        screen: MapScreen, 
        navigationOptions:() =>({
            title: 'Mapa',
            // header: null,
            headerTitle: 'Mapa',
            tabBarIcon: ({ tintColor, focused }) => ( 
                <Ionicons name={focused ? 'ios-map' : 'ios-map'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor}}/>
            )
        })
    },
    Cards:{
        screen: HistoricalScreen,
        navigationOptions:() =>({
            title: 'Listado',
            headerTitle: 'Listado',
            tabBarIcon: ({ tintColor, focused }) =>( 
                // TODO: Obtener la suma de los pedidos pendientes de la API
                <IconBadge style={{marginBottom: 10}}
                    MainElement={
                        <Ionicons name={focused ? 'ios-list-box' : 'ios-list-box'} size={Platform.OS === 'ios' ? tabIcon : 24} style={{color: tintColor, bottom: 15}} badgeCount={6}/>
                    }
                    BadgeElement={<Text style={{ color: focused ? colors.WHITE : colors.WHITE , fontSize: 10, fontFamily: 'robotoRegular'}}>{Badgecontador}</Text>}
                    IconBadgeStyle={
                        {
                        width: 18,
                        height: 19,
                        left: 12,
                        top: -15,
                        marginBottom: 10,
                        backgroundColor: focused ? 'red' : 'red',
                        borderWidth: 1,
                        borderColor: focused ?  colors.WHITE : colors.WHITE,
                        }
                        }
                    Hidden={Badgecontador === 0}
                />
            ),
        })
    },
    HowScreen:{
        screen: HowScreen, 
        navigationOptions:() =>({
            title: 'Ayuda',
            // header: null,
            headerTitle: 'Ayuda',
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
    initialRouteName: 'Map',
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
            borderTopColor: colors.PRIMARYRGBA,
        }
    }
});

// const DNavigator = DrawerNavigator({
//     Orders:{
//         screen: TNavigator,
//         path: '/',
//         navigationOptions:() =>({
//             title: 'Pedidos',
//             drawerLabel: 'Pedidos',
//             drawerIcon: ({ tintColor, focused }) => ( 
//                 <Ionicons name={focused ? 'ios-map' : 'ios-map-outline'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
//             )
//         })
//     }, 
//     ServicesScreen:{
//         screen: ServicesScreen,
//         path: '/services',
//         navigationOptions:() =>({
//             title: 'Servicios',
//             drawerLabel: 'Servicios',
//             drawerIcon: ({ tintColor, focused }) => ( 
//                 <Ionicons name={focused ? 'ios-basket' : 'ios-basket-outline'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
//             )
//         })
//     },
//     AuthenticationScreen:{
//         screen: AuthenticationScreen,
//         path: '/me',
//         navigationOptions:() =>({
//             title: 'Mi cuenta',
//             drawerLabel: 'Mi cuenta',
//             drawerIcon: ({ tintColor, focused }) => ( 
//                 <EvilIcons name={focused ? 'user' : 'user'} size={Platform.OS === 'ios' ? 28 : 24} style={{color: tintColor}}/>
//             )
//         })
//     },
//     OrdersClientScreen:{
//         screen: OrdersClientScreen,
//         path: '/myorders',
//         navigationOptions:() =>({
//             title: 'Mis pedidos',
//             drawerLabel: 'Mis pedidos',
//             drawerIcon: ({ tintColor, focused }) => ( 
//                 <Ionicons name={focused ? 'ios-list-box' : 'ios-list-box-outline'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
//             )
//         })
//     },
//     How:{
//         screen: HowScreen,
//         path: '/how',
//         navigationOptions:() =>({
//             title: 'Cómo funciona',
//             drawerLabel: 'Cómo funciona',
//             drawerIcon: ({ tintColor, focused }) => ( 
//                 <Ionicons name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
//             )
//         })
//     },
//     AboutUsScreen:{
//         screen: AboutUsScreen,
//         path: '/about',
//         navigationOptions:() =>({
//             title: 'Acerca de',
//             drawerLabel: 'Acerca de',
//             drawerIcon: ({ tintColor, focused }) => ( 
//                 <MaterialCommunityIcons name={focused ? 'vector-union' : 'vector-union'} size={Platform.OS === 'ios' ? slideIcon : 24} style={{color: tintColor}}/>
//             )
//         })
//     },
//     MeScreen:{
//         screen: MeScreen,
//         path: '/me',
//         navigationOptions:() =>({
//             title: 'Mi cuenta',
//             drawerLabel: 'Mi cuenta',
//             drawerIcon: ({ tintColor, focused }) => ( 
//                 <EvilIcons name={focused ? 'user' : 'user'} size={Platform.OS === 'ios' ? 28 : 24} style={{color: tintColor}}/>
//             )
//         })
//     }
// },{
//     headerMode: 'none',
//     initialRouteName: 'Orders',
//     drawerPosition: 'left',
//     drawerWidth: 215,
//     useNativeAnimations: true,
//     contentOptions:{
//         activeTintColor: colors.WHITE,
//         activeBackgroundColor: colors.PRIMARY,
//         inactiveTintColor: colors.GRAY600,
//     labelStyle:{
//         fontSize: 16,
//         fontWeight: '400',
//         fontFamily: 'sspRegular'
//     },
//     style:{
//         marginVertical: 100,
//         marginHorizontal: 0
//       }},
    
// })

const AuthenticationModal = createStackNavigator({
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
                onPress={() => { navigation.navigate('Authentication')}}>
                <Text style={{fontSize: 16, color: colors.WHITE, fontWeight: '500'}}>Empleado</Text>
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
    Authentication:{
        screen: AuthenticationModal,
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
                <Entypo name="chevron-thin-left" size={Platform.OS === 'ios' ? 15 : null} color={colors.WHITE}/>
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
                    <Entypo name="chevron-thin-left" size={Platform.OS === 'ios' ? 15 : null} color={colors.WHITE} />
                </ButtonHeader>
            )
        })
    },
    MapScreen:{
        screen: MapScreen,
        navigationOptions: () => ({
            headerRight: null,
            headerLeft: null
        })
    },
    ServicesPScreen:{
        screen: ServicesPScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: null,
            headerLeft: (
            <ButtonHeader side="left" onPress={() => {
                Keyboard.dismiss();
                navigation.goBack(null)
                }}>
                <Entypo name="chevron-thin-left" size={Platform.OS === 'ios' ? 15 : null} color={colors.WHITE}/>
               
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
})

class Navigator extends Component {
    render() {
        return (
            <SNavigator/>
        );
    }
}

export default Navigator;