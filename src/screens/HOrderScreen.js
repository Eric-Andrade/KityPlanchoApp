import React, {Component} from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import OrderCard from '../components/OrderCard/OrderCard'
import { LoadingScreen } from '../commons/LoadingScreen';
import { fetchONEPDPR } from './redux/actions'

const Root = styled.View`
    flex: 1;
`;
const T = styled.Text`
    color: ${colors.GRAY600};
    fontSize: 16;
    textAlign: left;
`;
const OrderContainer = styled.View`
    flex: 0.35;
`;
const MapContainer = styled.View`
    flex: 1;
`;
const Title = styled.View`
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
const Touch = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    alignItems: center
`;

@connect(state => ({
    onepdpr: state.oneOrder.onepdpr
    }),
    { fetchONEPDPR })

class HOrderScreen extends Component {
    state = { 
        loading: false,
        region: {
            latitude: 24.02725253393618,
            longitude:  -104.67266356446854,
            latitudeDelta: 0.006446834062519002,
            longitudeDelta: 0.006199840871872198,
        }
     }
        
        componentDidMount(){
            this.props.fetchONEPDPR();
            this.setState({loading: true})
        }

        _onRegionChangeComplete = (region) =>{
            console.log(region)
            this.setState({region})
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
            const regionInitial ={
                latitude: latlng2.latitude,
                longitude:  latlng2.longitude,
                latitudeDelta: 0.006446834062519002,
                longitudeDelta: 0.006199840871872198
            }
            // this.setState({region: regionInitial})

            return (
                <Root>
                    <OrderContainer>
                        <OrderCard allpdpr={data}/>
                    </OrderContainer>
                    <Title>
                        <TitleText>Detalles de pedido</TitleText>
                    </Title>
                    <MapContainer>
                        <MapView style={{ flex: 1 }} 
                        initialRegion={this.state.region}
                        onRegionChangeComplete={this._onRegionChangeComplete}
                        showsUserLocation
                        followUserLocation>
                            
                            <MapView.Marker
                                coordinate={latlng1}
                                title={`Dirección a recoger`}
                                description={`${data.PDIRECCION_R}`}
                                pinColor={colors.STATUSYELLOW}
                            />

                            <MapView.Marker
                                coordinate={latlng2}
                                title={`Dirección a entregar`}
                                description={`${data.PDIRECCION_E}`}
                                pinColor={colors.STATUSBLUELIGHT}
                            />
                        </MapView>
                    </MapContainer>
                </Root>
            );
        }
    }
    
    export default HOrderScreen;