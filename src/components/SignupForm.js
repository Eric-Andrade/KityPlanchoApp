import React, { Component } from 'react';
import { Entypo }  from '@expo/vector-icons'
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';
import { LoadingScreen } from '../commons/LoadingScreen';
import FormSignup from './FormSignup/FormSignup';
import { postCliente } from './FormSignup/actions';

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
    flex: 0.3;
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
// const ButtonConfirm = styled(Touchable).attrs({
//     feedback: 'opacity',
//     hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
// })`
//     width: 70%;
//     height: 50;
//     backgroundColor: ${props => props.theme.PRIMARY};
//     borderRadius: 30;
//     justifyContent: center;
//     alignItems: center;
//     shadowOpacity: 0.2;
//     shadowRadius: 5;
//     shadowOffset: 0px 2px;
//     shadowColor: #000;
//     elevation: 2
// `;
// const ButtonConfirmText = styled.Text`
//     color: ${props => props.theme.WHITE};
//     fontWeight: 500;
//     fontSize: 16;
// `;
// const InputWrapper = styled.View`
//     height: 45;
//     width: 70%;
//     borderBottomWidth: 1;
//     borderBottomColor: ${props => props.theme.PINK200};
//     justifyContent: flex-end;
// `;
// const Input = styled.TextInput.attrs({
//     placeholderTextColor: colors.GRAY600,
//     selectionColor: Platform.OS === 'ios' ? colors.PRIMARY : undefined,
//     autoCorrect: false,
// })`
//     alignSelf: center;
//     width: 100%;
//     height: 30;
//     color: ${props => props.theme.GRAY600};
// `;

@connect(state => ({
        cliente: state.postclient
    }),
    { postCliente }
)

export default class SignForm extends Component {
    state = { 
        loading: false
     }

    _onOutSidePress = () => Keyboard.dismiss();
    // _onChangeText = (text, type) => this.setState({[type]:text});
    // _checkIfDisabled(){
    //     const { CNOMBRE, CAPELLIDOS, CTELEFONO, CEMAIL, CPASSWORD } = this.state;
    //     if( !CNOMBRE || !CAPELLIDOS || !CTELEFONO || !CEMAIL || !CPASSWORD ){
    //         return true
    //     }
    //     return false
    // }
    _onSignupPress = async values => {
        await this.props.postCliente(values)
        this.props.onBackPress();
    }

    render() {
        const {
            cliente
        } = this.props;

        if(cliente.isLoading){
            return <LoadingScreen/>
        }else if(cliente.error.on){
            return (
                <RootContainer>
                    <T>{cliente.error.message}</T>
                </RootContainer>
            )
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
                                <T>Ingresa tus datos, por favor</T>
                            </TContainer> 
                            <Wrapper>
                                <FormSignup 
                                onSignupPress={this._onSignupPress}
                                />
                               {/* <InputWrapper>
                                    <Input 
                                    value={this.state.CNOMBRE}
                                    placeholder="Nombre"
                                    returnKeyType={"next"}
                                    autoCapitalize="words"
                                    keyboardType="default"
                                    onChangeText={text => this._onChangeText(text, 'CNOMBRE')}
                                    underlineColorAndroid="transparent"
                                    onSubmitEditing={() => this.emailInput.focus()}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <Input 
                                    value={this.state.CAPELLIDOS}
                                    placeholder="Apellidos"
                                    autoCapitalize="none"
                                    keyboardType="default"
                                    onChangeText={text => this._onChangeText(text, 'CAPELLIDOS')}
                                    underlineColorAndroid="transparent"
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <Input 
                                    value={this.state.CTELEFONO}
                                    placeholder="Teléfono"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="phone-pad"
                                    onChangeText={text => this._onChangeText(text, 'CTELEFONO')}
                                    underlineColorAndroid="transparent"
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <Input 
                                    value={this.state.CEMAIL}
                                    placeholder="Correo electrónico"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onChangeText={text => this._onChangeText(text, 'CEMAIL')}
                                    underlineColorAndroid="transparent"
                                    ref={(input) => {this.emailInput = input }}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <Input
                                    value={this.state.CPASSWORD}
                                    placeholder="Contraseña"
                                    secureTextEntry
                                    autoCorrect={false}
                                    autoCapitalize="none"                            
                                    onChangeText={text => this._onChangeText(text, 'CPASSWORD')}
                                    underlineColorAndroid="transparent"
                                    />
                                </InputWrapper>
                                */}
                                {/* <ButtonConfirm onPress={this._onSignupPress} disabled={this._checkIfDisabled()}>
                                    <ButtonConfirmText>
                                        Crear cuenta nueva
                                    </ButtonConfirmText>
                                </ButtonConfirm>  */}
                            </Wrapper>
                    </BackImage>  
                </RootContainer>      
            </Root>
        );
    }
};