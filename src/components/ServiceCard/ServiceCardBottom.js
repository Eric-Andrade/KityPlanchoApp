import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

const Root = styled.View`
    flex: 0.8;
    flexDirection: row;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
`;
const ServiceText = styled.Text`
    fontSize: ${Platform.OS === 'ios' ? 13 : 11};
    fontWeight: ${Platform.OS === 'ios' ? 400 : 400 };
    color: ${props => props.theme.PRIMARY}
    textAlign: center
`;

function ServiceCardBottom({ SERVNOMBRE }){
    
    return(
        <Root>
            <ServiceText>
                {SERVNOMBRE}
            </ServiceText>
        </Root>
    )
}

export default ServiceCardBottom;