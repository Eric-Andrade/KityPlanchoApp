import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const Root = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    flex: 1;
    shadowOpacity: 0.25;
    shadowRadius: 1;
    shadowOffset: 2px 2px;
    shadowColor: #000;
    elevation: 2
`;
const MarkerContainer = styled.View`
    backgroundColor: ${props => props.background};
    minWidth: 22;
    paddingHorizontal: 4;
    height: 17;
    alignItems: center;
    justifyContent: center;
    borderRadius: 3;
    borderColor: ${colors.WHITE};
    borderWidth: 0;
    position: relative
`;
const MarkerText = styled.Text`
    color: ${colors.WHITE};
    fontSize: 12;
    fontWeight: 500;
    textAlign: center;
`;
const ShapeMarker = styled.View`
    alignSelf: center; 
    width: 0;
    height: 0;
    bottom: 3;
                  
    borderRightWidth: 5;
    borderRightColor: transparent;
                  
    borderTopWidth: 8;
    borderTopColor: ${props => props.background};

    borderLeftWidth: 5;
    borderLeftColor: transparent;
    
`;

export default function MarkerMap({ children, onPress, background }){
        return (
            <Root onPress={onPress}>
                <MarkerContainer background={background} >
                    <MarkerText>
                        {children}
                    </MarkerText>
                </MarkerContainer>
                    <ShapeMarker background={background}/>
            </Root>          
        );
}
