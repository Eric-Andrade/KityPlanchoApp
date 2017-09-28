import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../../util/constants'
import HOrderScreen from '../../../../../../../../../wamp/www/Itecor/kityplancho/kityplancho-app/src/screens/HOrderScreen';

const sizeStatus = 10;
const radiusStatus = sizeStatus / 2;

const Root = styled.View`
    flex: 1;
    flexDirection: row;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: space-between;
`;
const NameContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    flexDirection: row;
    alignItems: center;
`;
const ClientText = styled.Text`
    fontSize: 12;
    fontWeight: 400;
    color: ${props => props.theme.PRIMARY}
    marginLeft: 10;
    textAlign: center
`;
const StatusContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    flexDirection: row;
    alignItems: center;
`;
const StatusText = styled.Text`
    fontSize: 12;
    fontWeight: 400;
    color: ${props => props.theme.GRAY600}
    textAlign: center;
    alignSelf: flex-end;
`;
const Status = styled.View`
    marginHorizontal: 10;
    height: ${sizeStatus};
    width: ${sizeStatus};
    borderRadius: ${radiusStatus};
`;

function OrderCardBottom({ CNOMBRE, CAPELLIDOS, PSTATUS }){
    let STATUSCOLOR;
    
    switch (PSTATUS) {
        case 'cotizando':
            STATUSCOLOR = `${colors.GRAY600}`
            break;
        case 'en_cola':
            STATUSCOLOR = `${colors.STATUSORANGE}`
            break;
        case 'en_camino':
            STATUSCOLOR = `${colors.STATUSYELLOW}`
            break;
        case 'en_proceso':
            STATUSCOLOR = `${colors.STATUSBLUESTRONG}`
            break;
        case 'para_entregar':
            STATUSCOLOR = `${colors.STATUSBLUELIGHT}`
            break;
        case 'entregado':
            STATUSCOLOR = `${colors.STATUSGREEN}`
            break;
        case 'no_atendido':
            STATUSCOLOR = `${colors.STATUSRED}`
            break;
        default:
            STATUSCOLOR = `${colors.GRAY600}`
            break;
    }
    
    return(
        <Root>
            <NameContainer >
                <ClientText>
                    {CNOMBRE || null} {CAPELLIDOS || null}
                </ClientText>
            </NameContainer>
            <StatusContainer>
                <StatusText>
                    Estado del pedido
                </StatusText>
                <Status style={{backgroundColor: STATUSCOLOR}}/>
            </StatusContainer>
        </Root>
    )
}

export default OrderCardBottom;