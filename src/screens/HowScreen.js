import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Platform } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const tabIcon = 27;


const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
`
const Title = styled.View`
    alignItems: center;
    padding: 10px;
    width: 100%;
    backgroundColor: ${props => props.theme.WHITE};
    shadowColor: ${props => props.theme.GRAY777};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
    elevation: 2;
`;
const TitleText = styled.Text`
    color: ${colors.PINK800};
    fontSize: 18;
    fontFamily: sspRegular
`;
const ListContainer = styled.View`
    minHeight: 100;
    width: 100%;
    marginTop: 40
`;
const ItemContainer = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    height: 60;
    flexDirection: row;
    alignItems: center;
    backgroundColor: ${props => props.theme.WHITE};
`;
const ItemContainerIcon = styled.View`
    flex: 0.2;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
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
    fontSize: ${Platform.OS === 'ios' ? 15 : 13};
    fontWeight: ${Platform.OS === 'ios' ? 400 : 300 };
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
                    <TitleText>KityPlancho Ayuda</TitleText>
                </Title>
                <ScrollView>
                <ListContainer>
                    <ItemContainer>
                        <ItemContainerIcon>
                            <Entypo name="emoji-happy" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/>
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
                            <Ionicons name="md-time" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/>
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
                            <MaterialCommunityIcons name="map-marker-radius" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/> 
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
                            <Entypo name="heart" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/> 
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
                            <Ionicons name="md-contacts" size={Platform.OS === 'ios' ? tabIcon : 23} color={colors.PRIMARY}/> 
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