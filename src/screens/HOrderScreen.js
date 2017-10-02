import React, {Component} from 'react';
import { StatusBar, Dimensions, Alert } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import Polyline from '@mapbox/polyline';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import OrderCard from '../components/OrderCard/OrderCard';
import { LoadingScreen } from '../commons/LoadingScreen';
import { fetchONEPDPR } from './redux/actions';
import MarkerMap from '../components/MarkerMap';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATDELTA = 0.006446834062519002;
const LNGDELTA = LATDELTA * ASPECT_RATIO;
const RECOGER = 'R';
const ENTREGAR = 'E';

const Root = styled.View`
    flex: 1;
`;
const T = styled.Text`
    color: ${colors.GRAY600};
    fontSize: 16;
    textAlign: left;
`;
const OrderContainer = styled.View`
    flex: 0.31;
`;
const MapContainer = styled.View`
    flex: 1;
`;
const Title = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    alignItems: center;
    padding: 10px;
    width: 100%;
    backgroundColor: ${props =>props.theme.WHITE};
    shadowColor: ${props => props.theme.GRAY777};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
    elevation: 2;
`;
const TitleText = styled.Text`
    color: ${colors.PINK800};
    fontSize: 18;
    fontFamily: sspRegular
`;


@connect(state => ({
    onepdpr: state.oneOrder.onepdpr
    }),
    { fetchONEPDPR })

class HOrderScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
      });
      
    constructor(props){
        super(props)
        const { onepdpr: { data, isFetched } } = this.props;
        this.state = { 
            loading: false,
            lat: null,
            lng: null,
            // region: {
                //     latitude: 24.02725253393618,
                //     longitude:  -104.67266356446854,
                //     latitudeDelta: 0.006446834062519002,
                //     longitudeDelta: 0.006199840871872198,
                // },
            coordenadas_r: data.COORDENADAS_R,
            coordenadas_e: data.COORDENADAS_E,
            status: data.PSTATUS,
            fetched: isFetched,
            coords: [],
         }
    }

    watchID: ?number = null;
        
        componentDidMount(){
            this.props.fetchONEPDPR();
            this.setState({loading: true})

            navigator.geolocation.getCurrentPosition((position) =>{
                const lat = parseFloat(position.coords.latitude) 
                const lng = parseFloat(position.coords.longitude)
                
                this.setState({lat, lng})

                if (this.state.fetched) {
                     this.getDirections(`${this.state.lat},${this.state.lng}`,`${this.state.status === 'en_camino' ? this.state.coordenadas_r : this.state.coordenadas_e}`)
                    // this.getDirections(`${lat},${lng}`, "24.027675,-104.6708929")
                }
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

            //! En Map se uso para actualizar initialRegion hacia la posición actual de empleado 
            // this.watchID = navigator.geolocation.watchPosition((position) => {
            //     const lat = parseFloat(position.coords.latitude) 
            //     const lng = parseFloat(position.coords.longitude)
    
            //     const lastRegion = {
            //         latitude: lat,
            //         longitude: lng,
            //         latitudeDelta: LATDELTA,
            //         longitudeDelta: LNGDELTA
            //       }
            //       this.setState({mapRegion: lastRegion})
            //       this.setState({markerPosition: lastRegion})
            //   })
        } 
        
        _onRegionChangeComplete = (region) =>{
            console.log(region)
            // this.setState({region})
        }
        _markerlongclick(nuevaruta){
            this.getDirections(`${this.state.lat},${this.state.lng}`,`${nuevaruta}`)
        }

        _markerclick(IDPEDIDO){
            Alert.alert(`Hiciste click en pedido ${IDPEDIDO}`)
        }

        // TODO: Crear ruta al terminar de cargar el componente, (funciona solo al segundo intento)
        async getDirections(startLoc, destinationLoc) {           
           if (this.state.fetched) {
                try {
                    const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
                    const respJson = await resp.json();
                    const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
                    const coords = points.map((point, index) => ({
                            latitude : point[0],
                            longitude : point[1]
                        }))
                    this.setState({coords})
                    return coords
                } catch(error) {
                    alert(error)
                    return error
                }
           }
        }

       
        render() {
            if(!this.state.loading){
                return <LoadingScreen size="large"/>
            }
            
            const { 
                onepdpr: {
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
            const latlngR = data.COORDENADAS_R;
            const latlngRsplit = latlngR.split(',',2);
            const latlng1 = {
                latitude: parseFloat(latlngRsplit[0]),
                longitude: parseFloat(latlngRsplit[1])
            };

            const latlngE = data.COORDENADAS_E;
            const latlngEsplit = latlngE.split(',',2);
            const latlng2 = {
                latitude: parseFloat(latlngEsplit[0]),
                longitude: parseFloat(latlngEsplit[1])
            };

            //! this.setState({ coordenadas_r: latlngR, coordenadas_e: latlngE })

            return (
                <Root>
                    <OrderContainer>
                        <OrderCard allpdpr={data}/>
                    </OrderContainer>
                    <Title>
                        <TitleText>Ver servicios del pedido</TitleText>
                    </Title>
                    <MapContainer>
                        <MapView style={{ flex: 1 }} 
                        initialRegion={{
                            latitude: data.PSTATUS === 'en_camino' ? latlng1.latitude : latlng2.latitude,
                            longitude:  data.PSTATUS === 'en_camino' ? latlng1.longitude : latlng2.longitude,
                            latitudeDelta: LATDELTA,
                            longitudeDelta: LNGDELTA
                        }}
                        onRegionChangeComplete={this._onRegionChangeComplete}
                        showsUserLocation
                        followUserLocation>
                            
                            <MapView.Marker
                                coordinate={latlng1}
                                title={`Dirección a recoger`}
                                description={`${data.PDIRECCION_R}`}
                            >
                            <MarkerMap background={colors.STATUSYELLOW} onLongPress={() => {this._markerlongclick(data.PDIRECCION_R)}} onPress={() => {this._markerclick(data.IDPEDIDO)}}>
                                    {RECOGER}
                            </MarkerMap>
                            </MapView.Marker>

                            <MapView.Marker
                                coordinate={latlng2}
                                title={`Dirección a entregar`}
                                description={`${data.PDIRECCION_E}`}
                            >
                            <MarkerMap background={colors.STATUSBLUELIGHT} onLongPress={() => {this._markerlongclick(data.PDIRECCION_E)}} onPress={() => {this._markerclick(data.IDPEDIDO)}}>
                                    {ENTREGAR}
                            </MarkerMap>
                            </MapView.Marker>

                            <MapView.Polyline 
                                coordinates={this.state.coords}
                                strokeWidth={3}
                                strokeColor={colors.SECUNDARY}/>

                        </MapView>
                    </MapContainer>
                </Root>
            );
        }
    }
    
    export default HOrderScreen;