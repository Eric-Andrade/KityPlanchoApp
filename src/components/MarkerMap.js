import React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';
import { colors } from '../util/constants';

const Root = styled.View`
    flex: 1;
    shadowOpacity: 0.25;
    shadowRadius: 1;
    shadowOffset: 2px 2px;
    shadowColor: #000;
    elevation: 2
`;
const MarkerContainer = styled.View`
    backgroundColor: ${props => props.background};
    minWidth: 23;
    paddingHorizontal: 4;
    height: 18;
    alignItems: center;
    justifyContent: center;
    borderRadius: 3;
    position: relative
`;
const MarkerText = styled.Text`
    color: ${colors.WHITE};
    fontSize: 11;
    fontWeight: 500;
    textAlign: center;
`;
const ShapeMarker = styled.View`
    alignSelf: center; 
    width: 0;
    height: 0;
    bottom: 4;
    borderRightWidth: 5;
    borderRightColor: transparent;    
    borderTopWidth: 8;
    borderTopColor: ${props => props.background};
    borderLeftWidth: 5;
    borderLeftColor: transparent;
    
`;

export default function MarkerMap({ children, onPress, onLongPress, background }){
        return (
            <TouchableHighlight onLongPress={onLongPress} onPress={onPress}>
                <Root>
                    <MarkerContainer background={background} >
                        <MarkerText>
                            {children}
                        </MarkerText>
                    </MarkerContainer>
                    <ShapeMarker background={background}/>
                </Root>
            </TouchableHighlight>
        );
}
