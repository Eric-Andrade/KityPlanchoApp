import React from 'react';
import { View } from 'react-native';
import { FormInput, FormValidationMessage } from 'react-native-elements';
import { colors } from '../util/constants'

// const InputWrapper = styled.View`
//     height: 45;
//     width: 70%;
//     borderBottomWidth: 1;
//     borderBottomColor: ${props => props.theme.PINK200};
//     justifyContent: flex-end;
// `;

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom,
}) => (
  <View style={containerStyle}>
    {/* <FormLabel fontFamily="sspRegular" labelStyle={{ color:colors.GRAY600, fontSize: 14, alignSelf: 'center' }}>
      {label}
    </FormLabel> */}
    <FormInput
      {...input}
      {...custom}
      placeholder={label}
      placeholderTextColor={colors.GRAY600}
      style={{paddingVertical:9, color: colors.GRAY600}}
    />
    {error && touched &&
      <FormValidationMessage fontFamily="sspRegular" labelStyle={{ color: colors.PRIMARY, fontSize: 11, alignSelf: 'flex-end' }}>
        {error}
      </FormValidationMessage>
    }
    {/* <FormLabel fontFamily="sspRegular" labelStyle={{ color:colors.PRIMARY, fontSize: 14, alignSelf: 'center' }}>
      {input.name.length}/{minimumText}
    </FormLabel> */}
  </View>
);

export default TextInputWithValidations;