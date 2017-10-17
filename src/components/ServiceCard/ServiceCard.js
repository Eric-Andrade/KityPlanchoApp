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
    padding: 1px;
    margin: 2px;
    shadowColor: ${props => props.theme.GRAY777};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
    elevation: 2;
    height: ${Platform.OS === 'ios' ? 100 : 90};
    borderRadius: 5;
    backgroundColor: ${props => props.theme.WHITE};
`;
// maxWidth: ${Platform.OS === 'ios' ? 110 : 90};
// minWidth: ${Platform.OS === 'ios' ? 110 : 90};
// width: ${Platform.OS === 'ios' ? 110 : 90};

const ImageService = styled.Image`
    marginVertical: 3;
    padding: 10px;
    height: ${Platform.OS === 'ios' ? 50 : 40};
    width: ${Platform.OS === 'ios' ? 70 : 50};
`;

function ServiceCard({allserviciosactivos, itemWidth}){
    
    return(

        <Root>
            <CardContainer style={{width: itemWidth}}>
                <ImageService source={require('../../../assets/kitypink.png')}/>
                <ServiceCardBottom {...allserviciosactivos}/>
            </CardContainer>
        </Root>
    )
}

export default ServiceCard;