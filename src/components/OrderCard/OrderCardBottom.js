import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

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
    color: ${props => props.theme.GRAY600}
    textAlign: center;
    alignSelf: flex-end;

`;
const Status = styled.View`
    marginHorizontal: 10;
    height: ${sizeStatus};
    width: ${sizeStatus};
    borderRadius: ${radiusStatus}
    backgroundColor: ${props => props.theme.STATUSGREEN};
`;

function OrderCardBottom({ CNOMBRE, CAPELLIDOS }){
    
    return(
        <Root>
            <NameContainer>
                <ClientText>
                    {CNOMBRE} {CAPELLIDOS}
                </ClientText>
            </NameContainer>
            <StatusContainer>
                <StatusText>
                    Estado del pedido
                </StatusText>
                <Status />
            </StatusContainer>
        </Root>
    )
}

export default OrderCardBottom;