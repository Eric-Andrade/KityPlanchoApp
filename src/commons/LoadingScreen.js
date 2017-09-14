import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Root = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`

const LoadingScreen = ({size, color}) => (
    <Root>
        <ActivityIndicator size={size} color={color}/>
    </Root>
)

export { LoadingScreen };