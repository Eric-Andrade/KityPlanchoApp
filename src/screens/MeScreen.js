import React, { Component } from 'react';
import {Keyboard, Platform, Alert } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const kpLogoSize = 90;
const avatarRadius = kpLogoSize / 2;

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
`;
const LogoContainer = styled.View`
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
const Wrapper = styled.View`
    flex: 1;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
    marginBottom: 30
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
`;
const LogoutAccount =  styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    marginTop: 10;
    width: 70%;
    height: 50;
    backgroundColor: ${props => props.theme.WHITE};
    borderRadius: 30;
    justifyContent: center;
    alignItems: center;
    shadowOpacity: 0.2;
    shadowRadius: 5;
    shadowOffset: 0px 2px;
    shadowColor: #000;
    elevation: 2
`;
const LogoutAccountText = styled.Text`
    color: ${props => props.theme.PRIMARY};
    fontWeight: 500;
    fontSize: 16;
`;
const ButtonRemoveAccount = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    marginTop: 40;
    width: 55%;
    height: 40;
    backgroundColor: transparent;
    borderRadius: 10;
    borderWidth: 2;
    borderColor: #e80d00;
    justifyContent: center;
    alignItems: center;
    shadowOpacity: 0.2;
    shadowRadius: 5;
    shadowOffset: 0px 2px;
    shadowColor: #000;
    elevation: 2
`;
const ButtonRemoveText = styled.Text`
    color: #e80d00;
    fontWeight: 500;
    fontSize: 14;
`;

class MeScreen extends Component {
    state = { 
        nombre: '',
        apellidos: '',
        telefono: '',
        email: '',
        contrasena: '',
        loading: false
     }

    _onOutSidePress = () => Keyboard.dismiss();
    _onChangeText = (text, type) => this.setState({[type]:text});
    _checkIfDisabled(){
        const { nombre, apellidos, telefono, email, contrasena } = this.state;
        if( !nombre || !apellidos || !telefono || !email || !contrasena ){
            return true
        }
        return false
    }
    _logoutAlert(){
        Alert.alert('Adiós popo')
    }
    render() {
        return (
            <Root onPress={this._onOutSidePress}>
                
                <Wrapper>
                <LogoContainer>
                    <Logo source={require('../../assets/logokity.png')}/>
                </LogoContainer>
                    <InputWrapper>
                        <Input 
                        placeholder="Nombre"
                        returnKeyType={"next"}
                        autoCapitalize="words"
                        keyboardType="default"
                        onChangeText={text => this._onChangeText(text, 'nombre')}
                        underlineColorAndroid="transparent"
                        onSubmitEditing={() => this.emailInput.focus()}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input 
                        placeholder="Apellidos"
                        autoCapitalize="none"
                        keyboardType="default"
                        onChangeText={text => this._onChangeText(text, 'apellidos')}
                        underlineColorAndroid="transparent"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input 
                        placeholder="Teléfono"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="phone-pad"
                        onChangeText={text => this._onChangeText(text, 'telefono')}
                        underlineColorAndroid="transparent"
                        />
                    </InputWrapper>
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
                            Guardar cambios
                        </ButtonConfirmText>
                    </ButtonConfirm>
                    <LogoutAccount onPress={this._logoutAlert}>
                        <LogoutAccountText>
                            Cerrar sesión
                        </LogoutAccountText>
                    </LogoutAccount>
                    <ButtonRemoveAccount>
                        <ButtonRemoveText>
                            Dar de baja mi cuenta    
                        </ButtonRemoveText>
                    </ButtonRemoveAccount>
                </Wrapper>
            </Root>
        );
    }
}

export default MeScreen;