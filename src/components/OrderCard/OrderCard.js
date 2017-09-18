import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import OrderCardHeader from './OrderCardHeader';
import OrderCardBottom from './OrderCardBottom';
import {colors} from '../../util/constants'

const PFORMA = 'Tarjeta';
const PPAGADO = 'Pago por adelantado'
const sizeIcon = 20;
const sizeDisccount = 28;
const radiusDisccount = sizeDisccount / 2;

const Root = styled.View`
    minHeight: 145;
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
    paddingHorizontal: 55;
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
    color: ${props => props.theme.GRAY777}
`;
const CardContentP = styled.Text`
    fontSize: 12;
    width: 80;
    color: ${props => props.theme.GRAY777}
    textAlign: center;
`;
const DisccountContainer = styled.View`
    height: ${sizeDisccount};
    width: ${sizeDisccount};
    borderRadius: ${radiusDisccount}
    backgroundColor: ${props => props.theme.PINK200};
    alignItems: center;
    justifyContent: center;
    bottom: 7;
`;
const DisccountText = styled.Text`
    fontSize: 9;
    fontWeight: 600;
    color: ${props => props.theme.WHITE}
`;

function OrderCard({client}){
    
    return(
        <Root>
            <OrderCardHeader {...client}/>
            <CardContainer>
                <CardContentContainer>
                    <Ionicons name="ios-card" size={sizeIcon} color={colors.GRAY777}/>
                    <CardContentText>
                        {PFORMA}
                    </CardContentText>
                </CardContentContainer>
                <CardContentContainer>
                    <CardContentP>
                        {PPAGADO}
                    </CardContentP>
                    <DisccountContainer>
                        <DisccountText>
                            -10%
                        </DisccountText>
                    </DisccountContainer>
                </CardContentContainer>
            </CardContainer>
            <OrderCardBottom />
        </Root>
    )
}

export default OrderCard;