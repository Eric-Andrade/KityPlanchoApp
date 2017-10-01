import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const Root = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: {top: 15, bottom: 15, right: 15, left: 15}
})`
    flex: 1;
    shadowOpacity: 0.35;
    shadowRadius: 2;
    shadowOffset: 3px 2px;
    shadowColor: #000;
    elevation: 2
`;
const MarkerContainer = styled.View`
    backgroundColor: ${props => props.background};
    width: 28;
    height: 20;
    alignItems: center;
    justifyContent: center;
    borderRadius: 2;
    borderColor: ${colors.WHITE};
    borderWidth: 0;
    position: relative
`;
const MarkerText = styled.Text`
    color: ${colors.WHITE};
    fontSize: 12;
    fontWeight: 400;
    textAlign: center;
    textShadowColor: #000;
    textShadowOffset: 2px 1px;
    textShadowRadius: 1
`;
const ShapeMarker = styled.View`
    width: 0;
    height: 0;
    bottom: 3;
    left: 7;
                  
    borderRightWidth: 7;
    borderRightColor: transparent;
                  
    borderTopWidth: 10;
    borderTopColor: ${props => props.background};

    borderLeftWidth: 7;
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
