import React, {Component} from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import OrderCard from '../components/OrderCard/OrderCard'
import { LoadingScreen } from '../commons/LoadingScreen'
import { fetchClients } from './redux/actions'

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
    Clients: state.home.Clients
    }),
    { fetchClients })

class HistoricalScreen extends Component {
    
    componentDidMount(){
        this.props.fetchClients();
    }

    render() {
        const { 
            Clients: {
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
                <FlatList
                    data={data}
                    renderItem={
                        ({item: client}) => (
                            <Touch>
                                <OrderCard client={client} />
                            </Touch>
                        )
                    }
                    keyExtractor={(item, index) => index}
                    />
            </Root>
        );
    }
}

export default HistoricalScreen;