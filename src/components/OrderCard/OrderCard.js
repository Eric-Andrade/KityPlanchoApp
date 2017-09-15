import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import OrderCardHeader from './OrderCardHeader';
import OrderCardBottom from './OrderCardBottom';
import {colors} from '../../util/constants'

const PFORMA = 'Tarjeta';
const PPAGADO = 'Pago por adelantado'
const sizeIcon = 20;

const Root = styled.View`
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
const CardContainer = styled.View`
    flex: 1;
    flexDirection: row;
    paddingHorizontal: 30;
    alignItems: center
`;
const CardContentContainer = styled.View`
    flex: 1;
    padding: 10px 20px 10px 5px;
    flexDirection: row;
    justifyContent: center;
`;
const CardContentText = styled.Text`
    marginLeft: 5;
    fontSize: 14;
    color: ${props => props.theme.GRAY900}
`;
const CardContentP = styled.Text`
    fontSize: 12;
    width: 80;
    color: ${props => props.theme.GRAY900}
    textAlign: center;
`;

function OrderCard({client}){
    
    return(
        <Root>
            <OrderCardHeader {...client}/>
            <CardContainer>
                <CardContentContainer>
                    <Ionicons name="ios-card" size={sizeIcon} color={colors.GRAY900}/>
                    <CardContentText>
                        {PFORMA}
                    </CardContentText>
                </CardContentContainer>
                <CardContentContainer>
                    <CardContentP>
                        {PPAGADO}
                    </CardContentP>
                </CardContentContainer>
            </CardContainer>
            <OrderCardBottom />
        </Root>
    )
}

export default OrderCard;