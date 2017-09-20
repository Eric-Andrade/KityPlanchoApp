import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const kpLogoSize = 90;
const avatarRadius = kpLogoSize / 2;
const kpIcon = 40;
const logoRadius = kpIcon / 2;


const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
`;
const T = styled.Text`
    color: ${colors.PINK200};
    fontSize: 20;
    textAlign: left;
    fontFamily: sspRegular;
    fontWeight: 200;
`;
const LogoContainer = styled.View`
    alignSelf: center;
    height: 95;
    width: 95;
    borderRadius: 45;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${props => props.theme.WHITE};
`;
const Logo = styled.Image`
    height: ${kpLogoSize};
    width: ${kpLogoSize};
    borderRadius: ${avatarRadius};
`;
const ListContainer = styled.View`
    minHeight: 75;
    width: 100%;
`;
const ItemContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    height: 50;
    flexDirection: row;
    alignItems: center;
    backgroundColor: white
`;
const ItemContainerIcon = styled.View`
    flex: 0.2;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
`;
const ItemIcon = styled.Image`
    height: ${kpIcon};
    width: ${kpIcon};
    borderRadius: ${logoRadius};
`;
const Separator = styled.View`
    alignSelf: flex-end;
    width: 85%;
    borderBottomWidth: 0.6;
    borderBottomColor: ${props => props.theme.GRAY600RGBA};
`;
const ItemContainerText = styled.View`
    flex: 1;
`;
const ItemText = styled.Text`

`;

class HowScreen extends Component {
    state = {  }
    render() {
        return (
            <Root>
                <LogoContainer>
                    <Logo source={require('../../assets/logokity.png')}/>
                </LogoContainer>
                <ListContainer>
                    <ItemContainer>
                        <ItemContainerIcon>
                            <ItemIcon source={require('../../assets/logokity.png')}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Mi primer pedido</ItemText>
                        </ItemContainerText>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer>
                        <ItemContainerIcon>
                            <ItemIcon source={require('../../assets/logokity.png')}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Entrega a domicilio</ItemText>
                        </ItemContainerText>
                    </ItemContainer>
                    <Separator />
                </ListContainer>
            </Root>
        );
    }
}

export default HowScreen;