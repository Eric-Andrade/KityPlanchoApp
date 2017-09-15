import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';
import { MapView } from 'expo';
import Touchable from '@appandflow/touchable';

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    backgroundColor: ${props => props.theme.WHITE};
    justifyContent: center;
    alignItems: center;
`;

class MapScreen extends Component {
    state = { 
        nombre: '',
        apellidos: '',
        telefono: '',
        email: '',
        contrasena: '',
        loading: false
     }

     _onOutSidePress = () => Keyboard.dismiss();
    _onChangeText = (text, type) => this.setState({[type]:text});
    _checkIfDisabled(){
        const { nombre, apellidos, telefono, email, contrasena } = this.state;
        if( !nombre || !apellidos || !telefono || !email || !contrasena ){
            return true
        }
        return false
    }

    render() {
        return (
            <Root onPress={this._onOutSidePress}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 40.757908,
                        longitude: -73.972649,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        
                        // 24.0293014,-104.6762739
                    }}
                    />                
            </Root>
        );
    }
}

export default MapScreen;