import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../util/constants';

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
        <ActivityIndicator 
            animating 
            hidesWhenStopped 
            size="large" 
            color={colors.PRIMARY}
            style= {{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 80
            }}/>
        {/* <KPLogo source={require('../../assets/icons/loading-icon.gif')}/> */}
    </Root>
)

export { LoadingScreen };