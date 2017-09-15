import React from 'react';
import styled from 'styled-components/native';

const kpLogoSize = 40;
const logoRadius = kpLogoSize / 2;
const IDPEDIDO = 12;
const PDPFECHA = 'un día';
const PCANTIDAD = '216.00';

const Root = styled.View`
    height: 50;
    flexDirection: row;
    alignItems: center;    
`;
const Separator = styled.View`
    width: 95%;
    borderBottomWidth: 0.6;
    borderBottomColor: ${props => props.theme.GRAY600RGBA};
`;
const KPLogoContainer = styled.View`
    flex: 0.2;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
`;
const KPLogo = styled.Image`
    height: ${kpLogoSize};
    width: ${kpLogoSize};
    borderRadius: ${logoRadius}

`;
const MetadataContainer = styled.View`
    flex: 1;
    alignSelf: stretch
`;
const MetadataTopContainer = styled.View`
    flex: 1;
    flexDirection: row;
    alignSelf: stretch;
    justifyContent: space-between;
`;
const OrderInfo = styled.Text`
    fontSize: 15;
    fontWeight: 500;
    color: ${props => props.theme.GRAY777}
`;
const OrderInfoID = styled.Text`
    fontSize: 15;
    fontWeight: bold;
    color: ${props => props.theme.PRIMARY}
`;
const OrderAmountContainer = styled.View`
    minWidth: 85;
    backgroundColor:${props => props.theme.PRIMARY};
    alignItems: center;
    justifyContent: center;
    marginRight: 20;
    borderRadius: 20;
    padding: 10px;

`;
const OrderAmountText = styled.Text`
    alignItems: center;
    justifyContent: center;
    fontSize: 14;
    fontWeight: 400;
    color: ${props => props.theme.WHITE};
`;
const MetadataBottomContainer = styled.View`
    flex: 1;
    alignSelf: stretch;
    alignItems: flex-start
`;
const MetadataBottomText = styled.Text`
    fontSize: 14;
    fontWeight: 400;
    color: ${props => props.theme.GRAY600}
`; 

function OrderCardHeader({ID, CNOMBRE, CAPELLIDOS, CPASSWORD}){
    return(
        <Root>
            <KPLogoContainer>
                <KPLogo source={require('../../../assets/logokity.png')}/>
            </KPLogoContainer>
            <MetadataContainer>
                <MetadataTopContainer>
                    <OrderInfo>
                        ID Pedido 
                        <OrderInfoID> {ID} </OrderInfoID>
                    </OrderInfo>
                    <OrderAmountContainer>
                        <OrderAmountText>
                            ${PCANTIDAD}
                        </OrderAmountText>
                    </OrderAmountContainer>
                </MetadataTopContainer>
                <MetadataBottomContainer>
                    <MetadataBottomText>
                        Hace {PDPFECHA}
                    </MetadataBottomText>
                </MetadataBottomContainer>
                <Separator />
            </MetadataContainer>
        </Root>
    )
}

export default OrderCardHeader;