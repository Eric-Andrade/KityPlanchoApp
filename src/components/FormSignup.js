import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components/native';
import { colors } from '../util/constants';
import { TextInputWithValidations } from './TextInputWithValidations';

const Root = styled.View`
    flex: 1;
    width: 90%
`;

const FormSignup = () => (
    <Root>
        <Field 
            component={TextInputWithValidations}
            name="CNOMBRE"
            title="Nombre"
            selectionColor={colors.PRIMARY}
        />
    </Root>
);

export default reduxForm({
    form: 'postCliente'
})(FormSignup);