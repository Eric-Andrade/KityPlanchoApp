import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Keyboard } from 'react-native';

import { colors } from './util/constants';
import HistoricalScreen from './screens/HistoricalScreen';
import MeScreen from './screens/MeScreen';
import AuthenticationScreen from './screens/AuthenticationScreen'
import NewClientScreen from './screens/NewClientScreen';
import ButtonHeader from './components/ButtonHeader';

const tabIcon = 27;

const TNavigator = TabNavigator({
    Clientes:{
        screen: HistoricalScreen,
        navigationOptions:() =>({
            headerTitle: 'Clientes',
            tabBarIcon: ({ tintColor, focused }) =>( 
                <Ionicons name={focused ? 'ios-people' : 'ios-people-outline'} size={tabIcon} style={{color: tintColor}}/>
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
                <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={tabIcon} style={{color: tintColor}}/>
            )
        })
    }
},{
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'Clientes',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: '#333',
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

const NewClientModal = StackNavigator({
    NewClient: {
        screen: NewClientScreen,
        navigationOptions: ({ navigation }) => ({
            headerRight: (
                <ButtonHeader side="right" onPress={() => {
                    Keyboard.dismiss();
                    navigation.goBack(null)
                    }}>
                    <EvilIcons name="close" size={tabIcon} color={colors.PRIMARY}/>
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
                <ButtonHeader side="right" onPress={() => navigation.navigate('NewClient')}>
                    <Ionicons name='md-person-add' size={25} color={colors.WHITE}/>
                </ButtonHeader>
            )
        })
    },
    NewClient:{
        screen: NewClientModal,
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