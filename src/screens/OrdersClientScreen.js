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
    justifyContent: center;
`;
const TextContainer = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center
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
                <Display enable={data.length > 0 ? true : false}>
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
                </Display>
                <Display enable={data.length === 0 ? true : false}>
                        <TextContainer>
                            <T>Aún no hay pedidos :'(</T>
                        </TextContainer>
                </Display>
            </Root>
        );
    }
}

export default ClientOrdersScreen;