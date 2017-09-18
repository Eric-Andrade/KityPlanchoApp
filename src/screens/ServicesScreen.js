import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    alignItems: center;
`;
const ServicesCardContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 25, bottom: 25, right: 25, left: 25}
})`
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

class ServicesScreen extends Component {
    state = {  }
    render() {
        return (
            <Root>
                <T>Servicios de KityPlancho</T>
                <ServicesCardContainer />
            </Root>
        );
    }
}

export default ServicesScreen;