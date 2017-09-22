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
    flex: 0.32;
`;
const MapContainer = styled.View`
    flex: 1;
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
        nombre: '',
        apellidos: '',
        telefono: '',
        email: '',
        contrasena: '',
        loading: false,
        region: {
            latitude: 24.02725253393618,
            longitude:  -104.67266356446854,
            latitudeDelta: 0.006446834062519002,
            longitudeDelta: 0.006199840871872198,
        },
        latlng: {
            latitude: 224.025112476834142,
            longitude: -104.66076859577711,
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
            return (
                <Root>
                    <OrderContainer>
                        <OrderCard allpdpr={data}/>
                    </OrderContainer>
                    <MapContainer>
                        <MapView style={{ flex: 1 }} 
                        initialRegion={this.state.region}
                        onRegionChangeComplete={this._onRegionChangeComplete}>
                            <MapView.Marker
                            coordinate={this.state.latlng}
                            image={require('../../assets/rutero.png')}
                            />
                        </MapView>
                    </MapContainer>
                    {/* <FlatList
                        data={data}
                        renderItem={
                            ({item: onepdpr}) => (
                                <Touch>
                                    <OrderCard onepdpr={onepdpr} />
                                </Touch>
                            )
                        }
                        keyExtractor={(item, index) => index}
                        /> */}
                </Root>
            );
        }
    }
    
    export default HOrderScreen;