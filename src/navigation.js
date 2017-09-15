import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { Ionicons, EvilIcons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Keyboard } from 'react-native';

import { colors } from './util/constants';
import HistoricalScreen from './screens/HistoricalScreen';
import MeScreen from './screens/MeScreen';
import AuthenticationScreen from './screens/AuthenticationScreen'
import MapScreen from './screens/MapScreen';
import ButtonHeader from './components/ButtonHeader';

const tabIcon = 27;

const TNavigator = TabNavigator({
    Historical:{
        screen: HistoricalScreen,
        navigationOptions:() =>({
            title: 'Mis pedidos',
            headerTitle: 'Mis pedidos',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <Ionicons name={focused ? 'ios-list' : 'ios-list'} size={tabIcon} style={{color: tintColor}}/>
            )
        })
    },
    Autenticación:{
        screen: AuthenticationScreen,
        navigationOptions:() =>({
            headerTitle: 'Autenticación',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <Ionicons name={focused ? 'md-log-in' : 'md-log-in'} size={tabIcon} style={{color: tintColor}}/>
            )
        })
    },
    Perfil:{
        screen: MeScreen,
        navigationOptions:() =>({
            title: 'Mi cuenta',
            headerTitle: 'Mi cuenta',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <MaterialCommunityIcons name={focused ? 'account-circle' : 'account-circle'} size={tabIcon} style={{color: tintColor}}/>
            )
        })
    },
    Map:{
        screen: MapScreen,
        headerMode: 'none', 
        navigationOptions:() =>({
            title: 'Mapa',
            headerMode: 'none',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <MaterialCommunityIcons name={focused ? 'map-marker' : 'map-marker'} size={tabIcon} style={{color: tintColor}}/>
            )
        })
    }
},{
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'Historical',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.GRAY600,
        pressColor: colors.PRIMARY,
        indicatorStyle: { backgroundColor: colors.PRIMARY },
        style:{
            backgroundColor: colors.WHITE,
            height: 47,
            paddingVertical: 5,
            borderTopWidth: 2,
            borderTopColor: colors.PRIMARYRGBA,
        }
    }
});

const NewOrderModal = StackNavigator({
    NewOrder: {
        screen: MapScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <ButtonHeader side="right" onPress={() => {
                    Keyboard.dismiss();
                    navigation.goBack(null)
                    }}>
                    <EvilIcons name="close" size={tabIcon} color={colors.WHITE}/>
                </ButtonHeader>
            ),
            headerLeft: (undefined)
        })
    }
},
    { headerMode: 'none'}
);

const SNavigator = StackNavigator({
    Historical:{
        screen: TNavigator,
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <ButtonHeader side="right" onPress={() => navigation.navigate('NewOrder')}>
                    <MaterialCommunityIcons name='plus' size={tabIcon} color={colors.WHITE}/>
                </ButtonHeader>
            )
        })
    },
    NewOrder:{
        screen: NewOrderModal,
        navigationOptions:() => ({
            title: 'Nuevo cliente'
        })
    }
},{
    cardStyle: {
        backgroundColor: colors.GRAY100
    },
    navigationOptions: () => ({
        headerStyle:{
            backgroundColor: colors.PRIMARY,
            borderBottomWidth: 2,
            borderBottomColor: colors.PRIMARYRGBA,
        },
        headerTitleStyle:{
            color: colors.WHITE,
            fontWeight: '400'
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