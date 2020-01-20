import React, { Component } from 'react';
import { StatusBar, Dimensions, Alert } from 'react-native';
// import Geocoder from 'react-native-geocoder';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { MapView } from 'expo';
import Polyline from '@mapbox/polyline';
import { LoadingScreen } from '../commons/LoadingScreen';
import { colors } from '../util/constants';
import { fetchALLPDPR } from './redux/actions'
import MarkerMap from '../components/MarkerMap'

const kpContainerSize = 42;
const avatarRadius = kpContainerSize / 2;
const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATDELTA = 0.0108849341966401;
const LNGDELTA = LATDELTA * ASPECT_RATIO;

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
    height: 42;
    width: 37;
`;

@connect(state => ({
    allpdpr: state.historical.allpdpr
    }),
    { fetchALLPDPR })

class MapScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = { 
            lat: null,
            lng: null,
            loading: false,
            mapRegion: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
            markerPosition:{
                latitude: 0,
                longitude: 0
            },
            // region: {
            //     latitude: 24.025112476834142,
            //     longitude: -104.66076859577711,
            //     latitudeDelta: 0.0698849341966401,
            //     longitudeDelta: 0.047562460492812875
            // },
            kpsucursal: {
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
                    id: 1,
                    title: 'Marcador 1', 
                    description: 'Descripción del marcador 1',
                    pincolor: colors.STATUSYELLOW},
                    {latlng: 
                        {
                        latitude: 24.02574090527505,
                        longitude: -104.67300467638253
                        }, 
                    id: 2,
                    title: 'Marcador 2', 
                    description: 'Descripción del marcador 2',
                    pincolor: colors.STATUSBLUELIGHT},
                    {latlng: 
                        {
                        latitude: 24.051403020219556,
                        longitude: -104.64490753560555
                        }, 
                   id: 3,
                    title: 'Marcador 3', 
                    description: 'Descripción del marcador 3',
                    pincolor: colors.STATUSYELLOW},
                    {latlng: 
                        {
                        latitude: 24.055258816581457,
                        longitude: -104.66824845629891
                        }, 
                    id: 4,
                    title: 'Marcador 4', 
                    description: 'Descripción del marcador 4',
                    pincolor: colors.STATUSBLUELIGHT},
                    {latlng: 
                        {
                        latitude: 23.995409497383967,
                        longitude: -104.65303700092997
                        }, 
                    id: 5,
                    title: 'Marcador 5', 
                    description: 'Descripción del marcador 5',
                    pincolor: colors.STATUSYELLOW}
                ],  
        }
    }
    watchID: ?number = null;
    
    componentDidMount (){
         this.setState({loading: true});
         this.props.fetchALLPDPR();

    // * set current position like view initial
         navigator.geolocation.getCurrentPosition((position) =>{
            const lat = parseFloat(position.coords.latitude) 
            const lng = parseFloat(position.coords.longitude)
            
            const initialRegion = {
              latitude: lat,
              longitude: lng,
              latitudeDelta: LATDELTA,
              longitudeDelta: LNGDELTA
            }
            this.setState({lat, lng})
            this.setState({mapRegion: initialRegion})
            this.setState({markerPosition: initialRegion})     
            const waypoints = [this.state.markers.latlng];
            //* set values route (current location with a marker)
            this.getDirections(`${this.state.lat},${this.state.lng}`, `${this.state.markers[2].latlng.latitude},${this.state.markers[2].latlng.longitude}`, `${this.state.markers[4].latlng.latitude},${this.state.markers[4].latlng.longitude}|${this.state.markers[0].latlng.latitude},${this.state.markers[0].latlng.longitude}|${this.state.markers[1].latlng.latitude},${this.state.markers[1].latlng.longitude}`)
          },
          (error) => alert(JSON.stringify(error)),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

          this.watchID = navigator.geolocation.watchPosition((position) => {
            const lat = parseFloat(position.coords.latitude) 
            const lng = parseFloat(position.coords.longitude)

            const lastRegion = {
                latitude: lat,
                longitude: lng,
                latitudeDelta: LATDELTA,
                longitudeDelta: LNGDELTA
              }
              this.setState({mapRegion: lastRegion})
              this.setState({markerPosition: lastRegion})
          })

        const data = this.props.allpdpr.data;    
        let markersapi;
        for (let i = 0; i < data.length; i++) {
            const latlngR = data[i].COORDENADAS_R;
            if (latlngR != null) {
                const latlngsplit = latlngR.split(',',2);
                markersapi = {
                    latitude:  parseFloat(latlngsplit[0]),
                    longitude: parseFloat(latlngsplit[1])
                };
            }
            // console.log(`ID Pedido ${data[i].IDPEDIDO} lat: ${markersapi.latitude}, lng: ${markersapi.longitude}`);
      
        }
            
        setTimeout(()=>{
            this.setState({latlngr: markersapi})
          // console.warn(this.state.latlngr);
            }, 10000);
    }
     
    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }

    _markerlongclick(nuevalat, nuevalong){
        this.getDirections(`${this.state.lat},${this.state.lng}`,`${nuevalat},${nuevalong}`, '')
        console.log(nuevalat, nuevalong)
    }

    _markerclick(){
        // const { navigate } = this.props.navigation;
        //     navigate('HOrderScreen', { name: `Detalles del pedido`})
        Alert.alert(
            'Whepa Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }

    _deliverMarkerPressed(){
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }

    async getDirections(startLoc, destinationLoc, waypoints) {
        // https://maps.googleapis.com/maps/api/directions/json?origin=Adelaide,SA&destination=Adelaide,SA&waypoints=optimize:true|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA&key=YOUR_API_KEY
        try {
            const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&waypoints=optimize:|${waypoints}`)
            const respJson = await resp.json();
            const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            const coords = points.map((point, index) => ({
                    latitude : point[0],
                    longitude : point[1]
                }))
            this.setState({coords})
            return coords
        } catch(error) {
            return error
        }
    }

    _onRegionChangeComplete = (region) =>{ 
        this.setState({region});
        // Geocoder.geocodeAddress('New York')
        // .then(response => { console.log('response', response); })
        // .catch(err => console.log(err))
        // console.warn(`latitude: ${ region.latitude } longitude: ${ region.longitude }`);
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
        
        // this.setState({latlngr:latlng})
        return (
                <MapView style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH}}
                    initialRegion={this.state.mapRegion}
                    onRegionChangeComplete={this._onRegionChangeComplete}
                    followUserLocation> 
                <StatusBar
                    backgroundColor="#E72B73"
                    barStyle="dark-content"
                />
                    <MapView.Marker
                        coordinate={this.state.markerPosition}
                        title={'Durango'}
                        description={'¡Consentimos a tu ropa para que ella te consienta a ti!'}
                        onPress={() => this._deliverMarkerPressed()}>
                            {/* <LogoContainer> */}
                                <Logo source={require('../../assets/rutero2.png')}/>
                            {/* </LogoContainer> */}
                    </MapView.Marker>

                    {/* {this.state.latlngr.map((marker, i) => (
                        <MapView.Marker
                            key={i}
                            coordinate={marker}
                            
                        />
                    ))} */}

                    {this.state.markers.map((marker, i) => (
                        <MapView.Marker
                            key={i}
                            coordinate={marker.latlng}
                            title={`${marker.title}`}
                            description={marker.description}>
                                <MarkerMap background={marker.pincolor} 
                                    onPress={() => this._markerclick()}
                                    onLongPress={() => {this._markerlongclick(marker.latlng.latitude, marker.latlng.longitude)}}>
                                        {marker.id}
                                </MarkerMap>
                            </MapView.Marker>
                    ))}

                    <MapView.Polyline 
                        coordinates={this.state.coords}
                        strokeWidth={3}
                        strokeColor={colors.SECUNDARY}/>
                        
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