import React, { Component } from 'react';
import { MapView } from 'expo';
import { LoadingScreen } from '../commons/LoadingScreen';

class MapScreen extends Component {
    
    state = { 
        nombre: '',
        apellidos: '',
        telefono: '',
        email: '',
        contrasena: '',
        loading: false,
        region: {
            latitude: 24.025112476834142,
            longitude: -104.66076859577711,
            latitudeDelta: 0.0698849341966401,
            longitudeDelta: 0.047562460492812875,
        },
        latlng: {
            latitude: 224.025112476834142,
            longitude: -104.66076859577711,
        }
     }

     componentDidMount (){
         this.setState({loading: true})
     }

    _onChangeText = (text, type) => this.setState({[type]:text});
    _checkIfDisabled(){
        const { nombre, apellidos, telefono, email, contrasena } = this.state;
        if( !nombre || !apellidos || !telefono || !email || !contrasena ){
            return true
        }
        return false
    }
    _onRegionChangeComplete = (region) =>{
        console.log(region)
        this.setState({region})
    }

    render() {
        if(!this.state.loading){
            return <LoadingScreen size="large"/>
        }
        return (
                <MapView style={{ flex: 1 }} 
                    initialRegion={this.state.region}
                    onRegionChangeComplete={this._onRegionChangeComplete}>
                        <MapView.Marker
                        coordinate={this.state.latlng}
                        image={require('../../assets/rutero.png')}
                        />
                </MapView>
       );
    }
}

export default MapScreen;