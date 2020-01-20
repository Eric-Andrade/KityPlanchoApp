import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors, variables } from '../util/constants';

const kpLogoSize = 80;
const avatarRadius = kpLogoSize / 2;


const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    backgroundColor: ${props => props.theme.GRAY600RGBA};
    
`;
const BackImage = styled.Image`
    flex: 1;
    resizeMode: cover;
    zIndex: 1;
`;
const RootContainer = styled.View`
    flex: 1;
    position: relative; 
    justifyContent: center;
    alignItems: center;
    marginHorizontal: 44
`;
const InfoContainer = styled.View`
    marginHorizontal: 15
`;
const T = styled.Text`
    color: ${colors.GRAY600};
    fontSize: 17;
    textAlign: left;
    fontFamily: sspRegular;
    textAlign: center;
    fontWeight: 300
`;
const IconsContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    marginVertical: 25;
`;
const LogoContainer = styled.View`
    height: 90;
    width: 90;
    borderRadius: 45;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${props => props.theme.WHITE};
    marginHorizontal: 15;
`;
const Logo = styled.Image`
    height: ${kpLogoSize};
    width: ${kpLogoSize};
`;
const LogoContainer2 = styled.View`
    height: 60;
    width: 150;
    borderRadius: 45;
    justifyContent: center;
    alignItems: center;
    marginHorizontal: 15;
    top: 15
`;
const Logo2 = styled.Image`
    height: 40;
    width: 140;
`;

class AboutUsScreen extends Component {
    state = {  }
    render() {
        return (
            <Root>
                <BackImage style={{width: null, height: null}}
                                    source={require('../../assets/backgroundgray.png')}>
                <RootContainer>
                        <T style={{color: '#E34D8F'}}>©{ variables.COMPANYNAME } web y ©{ variables.COMPANYNAME } app son servicios de software desarrollados por ©Itecor Durango</T>
                        <IconsContainer>
                            <LogoContainer>
                                <Logo source={require('../../assets/logokity.png')}/>
                            </LogoContainer>
                            <LogoContainer2>
                                <Logo2 source={require('../../assets/itecor.png')}/>
                            </LogoContainer2>
                        </IconsContainer>
                        <InfoContainer>
                            <T>10 Jun 2017</T>
                            <T style={{color: colors.GRAY900, fontWeight: '900', marginTop: 10}}>Contáctanos.</T>
                            <T style={{fontSize: 16, marginTop: 5}}>©Itecor Durango Dirección: Zaragoza #109 int #7, Zona Centro C.P. 34000 Durango / México.</T>
                            <T style={{fontSize: 16}}>Correo Electrónico: contacto@itecordurango.com</T>
                            <T tyle={{fontSize: 16}}>Teléfono: +52 618 8 25 12 31</T>
                        </InfoContainer>
                </RootContainer>

                </BackImage>
            </Root>
        );
    }
}

export default AboutUsScreen;