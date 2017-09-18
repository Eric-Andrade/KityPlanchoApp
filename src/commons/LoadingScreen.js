import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const kpLogoSize = 60;

const Root = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;
const KPLogo = styled.Image`
    height: ${kpLogoSize};
    width: ${kpLogoSize};
`;

const LoadingScreen = ({size, color}) => (
    <Root>
        {/* <ActivityIndicator size={size} color={color}/> */}
        <KPLogo source={require('../../assets/icons/loading-icon.gif')}/>
    </Root>
)

export { LoadingScreen };