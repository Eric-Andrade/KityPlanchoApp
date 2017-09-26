import React, {Component} from 'react';
import styled from 'styled-components/native';
import { FlatList, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Display from 'react-native-display';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import OrderCard from '../components/OrderCard/OrderCard'
import { LoadingScreen } from '../commons/LoadingScreen'
import { fetchALLPDPC } from './redux/actions'

const Root = styled.View`
    flex: 1;
`;
const TextContainer = styled.View`
    marginBottom: 85%;
    justifyContent: center;
    alignItems: center;
    backgroundColor: transparent;
`;
const T = styled.Text`
    color: #b7b7b7;
    fontSize: 16;
    textAlign: left;
    
`;
const Touch = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`

`;
const ButtonAddOrder = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    marginTop: 2;
    width: 55%;
    height: 40;
    backgroundColor: transparent;
    borderRadius: 10;
    borderWidth: 2;
    borderColor: #b7b7b7;
    justifyContent: center;
    alignItems: center;
`;
const ButtonAddOrderText = styled.Text`
    color: #b7b7b7;
    fontWeight: 500;
    fontSize: 14;

`;

@connect(state => ({
    allpdpc: state.ordersclient.allpdpc
    }),
    { fetchALLPDPC })

class ClientOrdersScreen extends Component {
    
    componentDidMount(){
        this.props.fetchALLPDPC();
    }

    render() {
        const { 
            allpdpc: {
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
                    <TextContainer>
                        <T>{error.on}</T>
                    </TextContainer>
                </Root>
            )
        }
        return (
            <Root>
                <StatusBar
                    backgroundColor="#E72B73"
                    barStyle="light-content"/>
                <FlatList
                    data={data}
                    renderItem={
                        ({item: allpdpc}) => (
                            <Touch>
                                <OrderCard allpdpr={allpdpc} />
                            </Touch>
                        )
                    }
                    keyExtractor={(item, index) => index}
                />
                
                <Display enable={data.length === 0 ? true : false}>
                        <TextContainer>
                            <T>Aún no hay pedidos :'(</T>
                            <ButtonAddOrder>
                                <ButtonAddOrderText>
                                    Nuevo pedido
                                </ButtonAddOrderText>
                            </ButtonAddOrder>
                        </TextContainer>
                </Display>
            </Root>
        );
    }
}

export default ClientOrdersScreen;