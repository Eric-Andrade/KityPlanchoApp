import React, { Component } from 'react';
import { Platform, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { Entypo } from '@expo/vector-icons';
import SignupForm from '../components/SignupForm';
import LoginDeliver from '../components/LoginDeliver'
import { colors } from '../util/constants'
import { KityPlanchoAPI } from '../util/api';

const kityplanchoApi = new KityPlanchoAPI();

const slogan = 'Consentimos a tu ropa para que ella te consienta a ti';
const kpLogoSize = 110;
const avatarRadius = kpLogoSize / 2;
 
const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    backgroundColor: ${props => props.theme.GRAY100};
`;
const RootContainer = styled.KeyboardAvoidingView.attrs({
    behavior: 'padding'
})`
    flex: 1;
    position: relative; 
    justifyContent: center;
    width: 100%;
    backgroundColor: ${props => props.theme.GRAY600RGBA};
`;
const BackButton = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 25, bottom: 25, right: 25, left: 25}
})`
    justifyContent: center;
    alignItems: center;
    position: absolute;
    top: 5%;
    right: 5%;
    zIndex: 2;
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
const CompanyName = styled.Text`
    color: ${props => props.theme.WHITE};
    fontSize: 23;
    fontWeight: 200;
    zIndex: 100;
    marginBottom: 15;
    fontFamily: sspRegular;
`;
const LogoContainer = styled.View`
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
const BottomContainer = styled.View`
    flex: ${Platform.OS === 'ios' ? 0.6 : 0.8};
    position: relative; 
    justifyContent: center;
    width: 100%;
`;
const BottomContainerForm = styled.View`
    marginTop: 25;
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
    marginTop: 20;
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
        CEMAIL: '',
        CPASSWORD: ''
     
    }

    _onOutSidePress = () => Keyboard.dismiss();
    _onChangeText = (text, type) => this.setState({[type]:text});
    _onShowSignupPress = () => this.setState({ showSignup: true });
    _onShowLoginDeliverPress = () => this.setState({ showLoginDeliver: true });
    _onBackPress = () => this.setState({ ...initialState });
    _checkIfDisabled(){
        const { CEMAIL, CPASSWORD } = this.state;
        if(!CEMAIL || !CPASSWORD ){
            return true
        }
        return false
    }
    
    _loginCliente = async () =>{
        const { CEMAIL, CPASSWORD } = this.state;
        const res = await kityplanchoApi.loginCliente({
            CEMAIL, CPASSWORD
        })
    }

    render() {
        const { goBack } = this.props.navigation;
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
                <RootContainer>
                    <BackButton onPress={() => goBack(null)}>
                        <Entypo name="chevron-thin-down" size={27} color={colors.WHITE}/>
                    </BackButton>
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
                                    onChangeText={text => this._onChangeText(text, ' CEMAIL')}
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
                                    onChangeText={text => this._onChangeText(text, 'CPASSWORD')}
                                    underlineColorAndroid="transparent"
                                    />
                                </InputWrapper>
                                <ButtonLogin
                                onPress={() => this._loginCliente()} 
                                disabled={this._checkIfDisabled()}>
                                    <ButtonLoginText>Ingresar</ButtonLoginText>
                                </ButtonLogin>
                                <ButtonSignup onPress={this._onShowSignupPress}>
                                    <ButtonSignupText>¿No tienes cuenta aún? <ButtonSignupText2>Regístrate</ButtonSignupText2></ButtonSignupText>
                                </ButtonSignup>
                                <ButtonLoginDeliver onPress={this._onShowLoginDeliverPress}>
                                    <ButtonLoginRutero>Acceso a empleado</ButtonLoginRutero>
                                </ButtonLoginDeliver>
                        </BottomContainerForm>
                    </BackImage>
                    </BottomContainer>
                </RootContainer> 
            </Root>
        );
    }
}

export default AuthenticationScreen;