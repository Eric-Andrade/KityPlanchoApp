import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    backgroundColor: ${props => props.theme.WHITE};
    justifyContent: center;
    alignItems: center;
`;
const InputContainer = styled.View`
    justifyContent: center;
    alignItems: center;
    width: 90%;
    height: 40;
    backgroundColor: ${props => props.theme.GRAY100};
    marginTop: 5;
`;
const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.GRAY600,
    autoCorrect: false,
})`
    marginHorizontal: 10;
    width: 90%;
    height: 40;
    color: ${props => props.theme.GRAY777};

`;
const ButtonSubmit = styled(Touchable).attrs({
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
const ButtonSubmitText = styled.Text`
    color: ${props => props.theme.WHITE};
    fontWeight: 500;
    fontSize: 16;
`;

class NewClientScreen extends Component {
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

    render() {
        return (
            <Root onPress={this._onOutSidePress}>
                <InputContainer>
                <Input 
                    placeholder="Nombre"
                    returnKeyType={"next"}
                    autoCapitalize="words"
                    keyboardType="default"
                    onChangeText={text => this._onChangeText(text, 'nombre')}
                    underlineColorAndroid="transparent"
                    onSubmitEditing={() => this.emailInput.focus()} 
                />
                </InputContainer>
                <InputContainer>
                    <Input 
                    placeholder="Apellidos"
                    autoCapitalize="none"
                    keyboardType="default"
                    onChangeText={text => this._onChangeText(text, 'apellidos')}
                    underlineColorAndroid="transparent"
                    />
                </InputContainer>
                <InputContainer>
                    <Input 
                    placeholder="Teléfono"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="phone-pad"
                    onChangeText={text => this._onChangeText(text, 'telefono')}
                    underlineColorAndroid="transparent"
                    />
                </InputContainer>
                <InputContainer>
                <Input 
                    placeholder="Correo electrónico"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={text => this._onChangeText(text, 'email')}
                    underlineColorAndroid="transparent"
                    ref={(input) => {this.emailInput = input }}
                    />
                </InputContainer>
                <InputContainer>
                    <Input
                    placeholder="Contraseña"
                    secureTextEntry
                    autoCorrect={false}
                    autoCapitalize="none"                            
                    onChangeText={text => this._onChangeText(text, 'contrasena')}
                    underlineColorAndroid="transparent"
                    />
                </InputContainer>
                <ButtonSubmit disabled={this._checkIfDisabled()}>
                    <ButtonSubmitText>Guardar nuevo cliente</ButtonSubmitText>
                </ButtonSubmit>
            </Root>
        );
    }
}

export default NewClientScreen;