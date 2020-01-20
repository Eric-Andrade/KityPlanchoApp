import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import ServiceCardBottom from './ServiceCardBottom';

const Root = styled.View`
    flex: 1;
`;
const CardContainer = styled.View`
    flexDirection: column;
    alignItems: center;
    justifyContent: center;
    padding: 2px;
    margin: 2px;
    shadowColor: ${props => props.theme.GRAY777};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.0;
    elevation: 0;
    height: ${Platform.OS === 'ios' ? 105 : 90};
    width: 95%;
    borderRadius: 5;
    backgroundColor: ${props => props.theme.WHITE};
`;
// maxWidth: ${Platform.OS === 'ios' ? 110 : 90};
// minWidth: ${Platform.OS === 'ios' ? 110 : 90};
// width: ${Platform.OS === 'ios' ? 110 : 90};

const ImageService = styled.Image`
    marginVertical: 3;
    padding: 6px;
    height: ${Platform.OS === 'ios' ? 50 : 40};
    width: ${Platform.OS === 'ios' ? 50 : 50};
`;

function ServiceCard({allserviciosactivos, itemWidth}){
    
    return(

        <Root>
            <CardContainer style={{width: itemWidth}}>
                <ImageService source={require('../../../assets/klinoicon.png')}/>
                <ServiceCardBottom {...allserviciosactivos}/>
            </CardContainer>
        </Root>
    )
}

export default ServiceCard;