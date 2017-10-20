import React, {Component} from 'react';
import styled from 'styled-components/native';
import { FlatList, StatusBar, View, Text } from 'react-native';
// import Toast from 'react-native-smart-toast';
import { connect } from 'react-redux';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import OrderCard from '../components/OrderCard/OrderCard';
import { LoadingScreen } from '../commons/LoadingScreen';
import { fetchALLPDPR } from './redux/actions';

const Root = styled.View`
    flex: 1;
    justifyContent: center;
`;
const T = styled.Text`
    color: ${colors.GRAY600};
    fontSize: 16;
    textAlign: left;
`;
const Touch = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`

`;

@connect(state => ({
    allpdpr: state.historical.allpdpr
    }),
    { fetchALLPDPR })

class HistoricalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    componentDidMount(){
        this.props.fetchALLPDPR();
    }

    _onOrdersClient = () => {
        const { navigate } = this.props.navigation;        
        navigate('OrdersClientScreen', { name: 'Myname'})
    };

    // _showCenterToast = () => {
    //     this._toast.show({
    //         position: Toast.constants.gravity.bottom,
    //         duration: 255,
    //         children: (
    //                     <View>
    //                         <Text style={{ color: 'white', fontFamily: 'sspRegular', fontSize: 13, fontWeight: '400' }}>ID pedido</Text>
    //                     </View>
    //                     ),
    //         // animationEnd : () => {
    //             //     this._toast._toastAnimationToggle = this.setTimeout( () => {
    //             //         this._toast.hide({
    //             //             duration: 0,
    //             //             animationEnd: () => {
    //             //                 //do sth...
    //             //             }
    //             //         })
    //             //     }, 3000)
    //             // }
    //     })
    // }

    render() {
        
        const { navigate } = this.props.navigation;
        
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
        return (
            <Root>
                <StatusBar
                    backgroundColor="#E72B73"
                    barStyle="light-content"
                />
                <FlatList
                    data={data}
                    renderItem={
                        ({item: allpdpr}) => (
                            <Touch onPress={() =>
                            navigate('HOrderScreen', { idpedido: allpdpr.IDPEDIDO, coordsrparam: allpdpr.COORDENADAS_R, coordseparam: allpdpr.COORDENADAS_E})}
                            >
                                <OrderCard allpdpr={(allpdpr)}/>
                            </Touch>
                        )
                    }
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                    />
             
            </Root>
        );
    }
}

export default HistoricalScreen;