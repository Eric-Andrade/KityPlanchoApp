
import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import { colors } from '../util/constants'

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <View style={containerStyle}>
    <FormLabel fontFamily="montserrat" labelStyle={{ color:colors.GRAY600 }}>
      {label}
    </FormLabel>
    <FormInput
      {...input}
      {...custom}
    />
    {error && touched &&
      <FormValidationMessage fontFamily="montserrat" labelStyle={{ color: colors.PRIMARY }}>
        {error}
      </FormValidationMessage>
    }
  </View>
);

export default TextInputWithValidations;