import React, { Component } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import { LoadingScreen } from '../commons/LoadingScreen'
import { getAllServiciosActivos } from './redux/actions';

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    alignItems: center;
`;
const ServicesCardContainer = styled.View`
    minHeight: 140;
    backgroundColor: ${props => props.theme.WHITE};
    width: 100%;
    padding: 5px;
    shadowColor: ${props => props.theme.GRAY777};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
    marginVertical: 2;
`;
const T = styled.Text`
    color: ${colors.GRAY600};
    fontSize: 16;
    textAlign: left;
    fontFamily: sspRegular
`;
const Touch = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    flexDirection: row;
`;

@connect(state => ({
    allserviciosactivos: state.services.allserviciosactivos
    }),
    { getAllServiciosActivos })

class ServicesScreen extends Component {

     componentDidMount(){
        this.props.getAllServiciosActivos();
    }

    render() {
        const { 
            allserviciosactivos: {
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
                        ({item: allserviciosactivos}) => (
                            <Touch>
                                <ServicesCardContainer >
                                    <T>{allserviciosactivos.SERVNOMBRE}</T>
                                </ServicesCardContainer>
                            </Touch>
                        )
                    }
                    keyExtractor={(item, index) => index}
                    />
            </Root>
        );
    }
}

export default ServicesScreen;