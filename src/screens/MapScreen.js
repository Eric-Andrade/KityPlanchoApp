import React, { Component } from 'react';
import { StatusBar } from 'react-native';
// import Geocoder from 'react-native-geocoder';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { MapView } from 'expo';
import { LoadingScreen } from '../commons/LoadingScreen';
import { colors } from '../util/constants';
import { fetchALLPDPR } from './redux/actions'

const kpContainerSize = 42;
const avatarRadius = kpContainerSize / 2;

const Root = styled.View`
    flex: 1;
    justifyContent: center;
`;
const T = styled.Text`
    color: ${colors.GRAY600};
    fontSize: 16;
    textAlign: left;
`;
// const LogoContainer = styled.View`
//     height: ${kpContainerSize};
//     width: ${kpContainerSize};
//     borderRadius: ${avatarRadius};
//     justifyContent: center;
//     alignItems: center;
//     backgroundColor: ${props => props.theme.WHITE};
// `;
const Logo = styled.Image`
    height: 39;
    width: 37;
`;

@connect(state => ({
    allpdpr: state.historical.allpdpr
    }),
    { fetchALLPDPR })

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
            longitudeDelta: 0.047562460492812875
        },
        latlng: {
            latitude: 24.025112476834142,
            longitude: -104.66076859577711,
        },
        latlngr:[],
        markers: [
                {latlng: 
                    {
                    latitude: 24.02780775285771,
                    longitude: -104.65332895517349
                    }, 
                title: 'Marcador 1', 
                description: 'Descripción del marcador 1',
                pincolor: colors.STATUSYELLOW},
                {latlng: 
                    {
                    latitude: 24.02574090527505,
                    longitude: -104.67300467638253
                    }, 
                title: 'Marcador 2', 
                description: 'Descripción del marcador 2',
                pincolor: colors.STATUSBLUELIGHT},
                {latlng: 
                    {
                    latitude: 24.051403020219556,
                    longitude: -104.64490753560555
                    }, 
                title: 'Marcador 4', 
                description: 'Descripción del marcador 4',
                pincolor: colors.STATUSYELLOW},
                {latlng: 
                    {
                    latitude: 24.055258816581457,
                    longitude: -104.66824845629891
                    }, 
                title: 'Marcador 3', 
                description: 'Descripción del marcador 3',
                pincolor: colors.STATUSBLUELIGHT},
                {latlng: 
                    {
                    latitude: 23.995409497383967,
                    longitude: -104.65303700092997
                    }, 
                title: 'Marcador 5', 
                description: 'Descripción del marcador 5',
                pincolor: colors.STATUSYELLOW}
            ],
     }
     
     componentDidMount (){
         this.setState({loading: true});
         this.props.fetchALLPDPR();
     }
     
    _onRegionChangeComplete = (region) =>{ 
        this.setState({region});
        // Geocoder.geocodeAddress('New York')
        // .then(response => { console.log('response', response); })
        // .catch(err => console.log(err))
        console.warn(`latitude: ${ region.latitude } longitude: ${ region.longitude }`);
    }

    
    render() {
        const { 
            allpdpr: {
                isFetched,
                data, 
                error
            }
        } = this.props;

        if(!isFetched){
            return <LoadingScreen size="large" color={colors.PRIMARY}/>
        } else if (error.on){
            return (
                <Root>
                    <T>{error.on}</T>
                </Root>
            )
        }
        let cont = 0;
        let latlng;
        for (let i = 0; i < data.length; i++) { 
            const latlngR = data[i].COORDENADAS_R;
            if (latlngR != null) {
                const latlngsplit = latlngR.split(',',2);
                latlng = {
                    latitude:  parseFloat(latlngsplit[0]),
                    longitude: parseFloat(latlngsplit[1])
                };
            }
        }
        // this.setState({latlngr:latlng})
        return (
                <MapView style={{ flex: 1 }}
                    initialRegion={this.state.region}
                    onRegionChangeComplete={this._onRegionChangeComplete}
                    showsUserLocation
                    followUserLocation> 
                <StatusBar
                    backgroundColor="#E72B73"
                    barStyle="default"
                />
                    <MapView.Marker
                        coordinate={this.state.latlng}
                        title={'Durango'}
                        description={'Consentimos a tu ropa para que ella te consienta a ti'}>
                            {/* <LogoContainer> */}
                                <Logo source={require('../../assets/logokity.png')}/>
                            {/* </LogoContainer> */}
                    </MapView.Marker>

                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                            pinColor={marker.pincolor}
                            draggable
                        />
                    ))}
                        
                        {/* {this.state.latlngr.map(markerR => (
                            <MapView.Marker
                            coordinate={markerR.latlng}
                            draggable
                            />
                        ))} */}
                       
                </MapView>
       );
    }
}

export default MapScreen;