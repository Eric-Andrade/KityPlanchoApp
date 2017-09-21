import React from 'react';
import styled from 'styled-components/native';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import eoLocale from 'date-fns/locale/es';

const kpLogoSize = 30;
const logoRadius = kpLogoSize / 2;
// const IDPEDIDO = 12;
// const PDPFECHA = 'un día';
// const PCANTIDAD = '217.00';

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
    color: ${props => props.theme.GRAY900}
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
    marginRight: 15;
    borderRadius: 20;
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

function OrderCardHeader({IDPEDIDO, PPRECIOTOTAL, PFECHA }){
    return(
        <Root>
            <KPLogoContainer>
                <KPLogo source={require('../../../assets/rutero.png')}/>
            </KPLogoContainer>
            <MetadataContainer>
                <MetadataTopContainer>
                    <OrderInfo>
                        ID Pedido 
                        <OrderInfoID> {IDPEDIDO} </OrderInfoID>
                    </OrderInfo>
                    <OrderAmountContainer>
                        <OrderAmountText>
                            ${PPRECIOTOTAL}.00
                        </OrderAmountText>
                    </OrderAmountContainer>
                </MetadataTopContainer>
                <MetadataBottomContainer>
                    <MetadataBottomText>
                    hace {distanceInWordsToNow(PFECHA, {locale: eoLocale})}
                    </MetadataBottomText>
                </MetadataBottomContainer>
                <Separator />
            </MetadataContainer>
        </Root>
    )
}

export default OrderCardHeader;