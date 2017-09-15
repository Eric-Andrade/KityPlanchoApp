import React, { Component } from 'react';
import { Platform, Keyboard, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import SignupForm from '../components/SignupForm';
import LoginDeliver from '../components/LoginDeliver'
import {colors} from '../util/constants'

const slogan = 'Consentimos a tu ropa para que ella te consienta a ti';
const kpLogoSize = 110;
const avatarRadius = kpLogoSize / 2;

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    backgroundColor: ${props => props.theme.GRAY100};
`;
const TopContainer = styled.View`
    flex: 1;
    position: relative; 
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${props => props.theme.PRIMARYRGBA};
`;
const BackImage = styled.Image`
    flex: 1;
    resizeMode: cover;
    zIndex: 1;
`;
const Slogan = styled.Text`
    color: ${props => props.theme.WHITE};
    width: 190;
    textAlign: center;
    fontSize: 14;
    fontStyle: italic;
    fontWeight: 600;
    marginTop: 15;    
    zIndex: 100;
`;
const CompanyName = styled.Text`
    color: ${props => props.theme.WHITE};
    fontSize: 18;
    fontWeight: 500;
    zIndex: 100;
`;
const LogoContainer = styled.Image`
    height: 115;
    width: 115;
    borderRadius: 55;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${props => props.theme.WHITE};
`;
const Logo = styled.Image`
    height: ${kpLogoSize};
    width: ${kpLogoSize};
    borderRadius: ${avatarRadius};
`;
const BottomContainer = styled.KeyboardAvoidingView.attrs({
    behavior: 'padding'
})`
    flex: 1;
    position: relative; 
    justifyContent: center;
    width: 100%;
    backgroundColor: ${props => props.theme.GRAY600RGBA};
`;
const BottomContainerForm = styled.View`
    marginTop: 30;
    alignItems: center
`;
const ButtonLogin = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    borderStyle: solid;
    borderRadius: 30;
    borderWidth: 1;
    width: 70%;
    height: 50;
    marginTop: 15;
    borderColor: ${props => props.theme.PRIMARY};
    backgroundColor: ${props => props.theme.PRIMARY};
    justifyContent: center;
    alignItems: center;
    shadowOpacity: 0.3;
    shadowRadius: 5;
    shadowOffset: 0px 3px;
    shadowColor: #000;
    elevation: 2;
`;
const ButtonLoginText = styled.Text`
    color: ${props => props.theme.WHITE};
    fontWeight: 500;
    fontSize: 16;
`;
const ButtonSignup = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    marginTop: 10;
    justifyContent: center;
    alignItems: center;
    zIndex: 1;
`;
const ButtonLoginDeliver = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    marginTop: 10;
    justifyContent: center;
    alignItems: center;
    zIndex: 1;
`;
const ButtonSignupText = styled.Text`
    color: ${props => props.theme.GRAY600};
    fontWeight: 500;
    fontSize: 13;
    zIndex: 100;
`;
const ButtonSignupText2 = styled.Text`
    color: ${props => props.theme.PRIMARY};
    fontWeight: 600;
    fontSize: 13;
    zIndex: 100;
`;
const ButtonLoginRutero = styled.Text`
    color: ${props => props.theme.PRIMARY};
    fontWeight: 600;
    fontSize: 13;
    zIndex: 100;
`;
const InputWrapper = styled.View`
    height: 45;
    width: 70%;
    borderBottomWidth: 1;
    borderBottomColor: ${props => props.theme.PINK200};
    justifyContent: flex-end;
`;
const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.GRAY600,
    selectionColor: Platform.OS === 'ios' ? colors.PINK200 : undefined,
    autoCorrect: false,
})`
    alignSelf: center;
    width: 100%;
    height: 30;
    color: ${props => props.theme.GRAY600};
`;

const initialState = { 
    showSignup: false,
    showLogin: false,
    showLoginDeliver: false
 }

class AuthenticationScreen extends Component {
    state = { 
        initialState,
        email: '',
        password: ''
     }
    _onOutSidePress = () => Keyboard.dismiss();
    _onShowSignupPress = () => this.setState({ showSignup: true });
    _onShowLoginDeliverPress = () => this.setState({ showLoginDeliver: true });
    _onBackPress = () => this.setState({ ...initialState });
    _checkIfDisabled(){
        const { email, password } = this.state;
        if(!email || !password ){
            return true
        }
        return false
    }

    render() {
        if (this.state.showSignup) {
            return(
                <Root>
                    <SignupForm onBackPress={this._onBackPress}/>
                </Root>
            )
        }
        if(this.state.showLoginDeliver){
            return(
                <Root>
                    <LoginDeliver onBackPress={this._onBackPress}/>
                </Root>
            )
        }
        return (
            <Root onPress={this._onOutSidePress}>
                <StatusBar
                    barStyle="light-content"
                />
                    <BackImage style={{width: null, height: null}}
                            source={require('../../assets/backgroundpink.png')}>
                        <TopContainer>
                            <CompanyName>
                                KityPlancho
                            </CompanyName>
                            <LogoContainer>
                                <Logo source={require('../../assets/logokity.png')}/>
                            </LogoContainer>
                            <Slogan>
                                {slogan}
                            </Slogan>
                        </TopContainer>
                    </BackImage>
                    <BottomContainer>
                    <BackImage style={{width: null, height: null}}
                            source={require('../../assets/backgroundgray.png')}>
                        <BottomContainerForm>
                                 <InputWrapper>
                                    <Input
                                    placeholder="Correo electrónico"
                                    keyboardType="email-address"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    underlineColorAndroid="transparent"        
                                    returnKeyType={"next"}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <Input
                                    placeholder="Contraseña"
                                    secureTextEntry
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    underlineColorAndroid="transparent"
                                    />
                                </InputWrapper>
                                <ButtonLogin disabled={this._checkIfDisabled()}>
                                    <ButtonLoginText>Ingresar</ButtonLoginText>
                                </ButtonLogin>
                                <ButtonSignup onPress={this._onShowSignupPress}>
                                    <ButtonSignupText>¿No tienes cuenta aún? <ButtonSignupText2>RegÍstrate</ButtonSignupText2></ButtonSignupText>
                                </ButtonSignup>
                                <ButtonLoginDeliver onPress={this._onShowLoginDeliverPress}>
                                    <ButtonLoginRutero>Acceso rutero</ButtonLoginRutero>
                                </ButtonLoginDeliver>
                        </BottomContainerForm>
                    </BackImage>
                    </BottomContainer>
            </Root>
        );
    }
}

export default AuthenticationScreen;