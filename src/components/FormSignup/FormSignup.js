import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../../util/constants';
import TextInputWithValidations from '../TextInputWithValidations';
import { FormSignupValidations } from './Validations';

const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(value)
  ? 'ingresa un correo electrónico válido'
  : undefined;

const alfabetico = value =>
  value && /[^a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]/i.test(value)
    ? 'únicamente caracteres alfabéticos'
    : undefined;

const puntosespacios = value =>
    value && !/[^\s++,.'-]$/i.test(value)
    ? 'hay caracteres o espacios en blanco invalidos'
    : undefined;

const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'ingresa un número de tel. válido'
    : undefined

const Root = styled.View`
    flex: 1;
    width: 83%;
    marginTop: 20
`;
const ButtonConfirm = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    marginTop: 25;
    width: 83%;
    height: 50;
    backgroundColor: ${ props => props.theme.PRIMARY };
    borderRadius: 30;
    justifyContent: center;
    alignSelf: center;
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


const FormSignup = ({
    onSignupPress,
    handleSubmit,
    invalid,
    submitting }) => (
    <Root>
        <Field 
            component={ TextInputWithValidations }
            name="CNOMBRE"
            label="Nombre"
            autoFocus
            autoCorrect
            autoCapitalize="words"
            keyboardType="default"
            underlineColorAndroid="transparent"
            selectionColor={colors.PRIMARY}
            containerStyle={{marginVertical: '1%'}}
            minimumText="45"
            maxLength={45}
            validate={[alfabetico, puntosespacios]}
            returnKeyType="next"
        />
        <Field 
            component={ TextInputWithValidations }
            name="CAPELLIDOS"
            label="Apellidos"
            autoCorrect
            autoCapitalize="words"
            keyboardType="default"
            underlineColorAndroid="transparent"
            selectionColor={colors.PRIMARY}
            containerStyle={{marginVertical: '1%'}}
            minimumText="65"
            maxLength={65}
            validate={[alfabetico, puntosespacios]}
            returnKeyType="next"
        />
        <Field 
            component={ TextInputWithValidations }
            returnKeyType="next"
            name="CTELEFONO"
            label="Teléfono"
            autoCorrect={false}
            keyboardType="phone-pad"
            underlineColorAndroid="transparent"
            selectionColor={colors.PRIMARY}
            containerStyle={{marginVertical: '1%'}}
            minimumText="10"
            maxLength={10}
            validate={phoneNumber}
        />
        <Field 
            component={ TextInputWithValidations }
            name="CEMAIL"
            label="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            selectionColor={colors.PRIMARY}
            containerStyle={{marginVertical: '1%'}}
            minimumText="45"
            maxLength={45}
            validate={email}
            returnKeyType="next"
        />
        <Field 
            component={ TextInputWithValidations }
            name="CPASSWORD"
            label="Contraseña" 
            secureTextEntry={true}
            selectTextOnFocus
            autoCorrect={false}
            autoCapitalize="none" 
            underlineColorAndroid="transparent"
            selectionColor={colors.PRIMARY}
            containerStyle={{marginVertical: '1%'}}
            minimumText="45"
            maxLength={45}
            returnKeyType="go"
        />
        <ButtonConfirm 
        onPress={handleSubmit(onSignupPress)}
        disabled={invalid || submitting}>
            <ButtonConfirmText>
                Crear nueva cuenta 
            </ButtonConfirmText>
        </ButtonConfirm> 
    </Root>
);
// onPress={this._onSignupPress} disabled={this._checkIfDisabled()}
export default reduxForm({
    form: 'postCliente',
    validate: FormSignupValidations
})(FormSignup);