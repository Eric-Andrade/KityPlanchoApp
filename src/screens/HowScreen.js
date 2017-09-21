import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const kpLogoSize = 90;
const avatarRadius = kpLogoSize / 2;
const kpIcon = 30;
const logoRadius = kpIcon / 2;

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
`
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
const Title = styled.View`
    alignItems: center;
    justifyContent: center;
    marginTop: 15;
    padding: 20px;
`;
const T = styled.Text`
    color: ${colors.PINK800};
    fontSize: 22;
    fontFamily: sspRegular
`;
const ListContainer = styled.View`
    minHeight: 100;
    width: 100%;
    marginTop: 50
`;
const ItemContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    height: 60;
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
    color: ${colors.GRAY600};
    fontSize: 16;
`;
const ArrowContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    flex: 0.1;
`

class HowScreen extends Component {
    state = {  }
    render() {
        return (
            <Root>
                {/* <LogoContainer>
                    <Logo source={require('../../assets/logokity.png')}/>
                </LogoContainer> */}
                <Title>
                    <T>KityPlancho Ayuda</T>
                </Title>
                <ScrollView>
                <ListContainer>
                    <ItemContainer>
                        <ItemContainerIcon>
                            <ItemIcon source={require('../../assets/logokity.png')}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Mi primer pedido</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer>
                        <ItemContainerIcon>
                            <ItemIcon source={require('../../assets/logokity.png')}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Horario de recogida/entrega</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer>
                        <ItemContainerIcon>
                            <ItemIcon source={require('../../assets/logokity.png')}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Disponibilidad por ubicación</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer>
                        <ItemContainerIcon>
                            <ItemIcon source={require('../../assets/logokity.png')}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Garantía KityPlancho</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                    <ItemContainer>
                        <ItemContainerIcon>
                            <ItemIcon source={require('../../assets/logokity.png')}/>
                        </ItemContainerIcon>
                        <ItemContainerText>
                            <ItemText>Contáctanos</ItemText>
                        </ItemContainerText>
                        <ArrowContainer>
                            <Entypo name="chevron-small-right" size={27} color={colors.GRAY600}/> 
                        </ArrowContainer>
                    </ItemContainer>
                    <Separator />
                </ListContainer>
                </ScrollView>
            </Root>
        );
    }
}

export default HowScreen;