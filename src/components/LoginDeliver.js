import React, { Component } from 'react';
import { Entypo }  from '@expo/vector-icons'
import { Platform, Keyboard, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors, variables } from '../util/constants'
import { LoadingScreen } from '../commons/LoadingScreen';

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
`;
const BackImage = styled.Image`
    flex: 1;
    resizeMode: cover;
    zIndex: 1;
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
const TContainer = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;
const T = styled.Text`
    color: ${props => props.theme.PRIMARY};
    fontWeight: 500;
    fontSize: 17;
`;
const Wrapper = styled.View`
    flex: 1;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
`;
const BackButton = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 25, bottom: 25, right: 25, left: 25}
})`
    justifyContent: center;
    alignItems: center;
    position: absolute;
    top: 9%;
    left: 5%;
    zIndex: 2;
`;
const ButtonConfirm = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    marginTop: 15;
    width: 70%;
    height: 50;
    backgroundColor: ${props => props.theme.PRIMARY};
    borderRadius: 30;
    justifyContent: center;
    alignItems: center;
    shadowOpacity: 0.2;
    shadowRadius: 5;
    shadowOffset: 0px 2px;
    shadowColor: #000;
    elevation: 2
`;
const ButtonConfirmText = styled.Text`
    color: ${props => props.theme.WHITE};
    fontWeight: 500;
    fontSize: 16;
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
`

class LoginDeliver extends Component {
    state = {
        email: '',
        contrasena: '',
        
        loading: false
     }

    _onOutSidePress = () => Keyboard.dismiss();
    _onChangeText = (text, type) => this.setState({[type]:text});
    _checkIfDisabled(){
        const {email, contrasena} = this.state;
        if(!email || !contrasena){
            return true
        }
        return false
    }
    _onSignupPress = async () => {
        this.setState({ loading: true})
        const {email, contrasena} = this.state;
        const avatar = fakeavatar;
    }
    render() {
        if(this.state.loading){
            return <LoadingScreen size="small" color={colors.PRIMARY}/>
        }
        return (
            <Root onPress={this._onOutSidePress}>
                <RootContainer>
                    <BackButton onPress={this.props.onBackPress}> 
                        <Entypo color={colors.GRAY900} size={23} name="chevron-thin-left" />
                    </BackButton>
                    <BackImage style={{width: null, height: null}}
                                source={require('../../assets/backgroundgray.png')}>
                            <TContainer>
                                <T>Ingresa como rutero de { variables.COMPANYNAME }</T>
                            </TContainer>    
                            <Wrapper>
                                <InputWrapper>
                                    <Input 
                                    placeholder="Correo electrónico"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={text => this._onChangeText(text, 'email')}
                                    underlineColorAndroid="transparent"
                                    ref={(input) => {this.emailInput = input }}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <Input
                                    placeholder="Contraseña"
                                    secureTextEntry
                                    autoCorrect={false}
                                    autoCapitalize="none"                            
                                    onChangeText={text => this._onChangeText(text, 'contrasena')}
                                    underlineColorAndroid="transparent"
                                    />
                                </InputWrapper>
                                <ButtonConfirm onPress={this._onSignupPress} disabled={this._checkIfDisabled()}>
                                    <ButtonConfirmText>
                                        Ingresar
                                    </ButtonConfirmText>
                                </ButtonConfirm>
                            </Wrapper>   
                    </BackImage>
                </RootContainer> 
            </Root>
        );
    }
}

export default LoginDeliver;