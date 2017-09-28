import React, { Component } from 'react';
import { ScrollView, Platform} from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../util/constants';

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
`
const Title = styled.View`
    alignItems: center;
    padding: 10px;
    width: 100%;
    backgroundColor: ${props => props.theme.WHITE};
    shadowColor: ${props => props.theme.GRAY777};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
    elevation: 2;
`;
const TitleText = styled.Text`
    color: ${colors.PINK800};
    fontSize: 18;
    fontFamily: sspRegular
`;
const ItemText = styled.Text`
    color: ${colors.GRAY600};
    fontSize: ${Platform.OS === 'ios' ? 15 : 13};
    fontWeight: ${Platform.OS === 'ios' ? 400 : 300 };
`;

class HowScreen extends Component {state = {  }
    render() {
        return (
            <Root>
                {/* <LogoContainer>
                    <Logo source={require('../../assets/logokity.png')}/>
                </LogoContainer> */}
                <Title>
                    <TitleText>KityPlancho Ayuda</TitleText>
                </Title>
                <ScrollView>
                    <ItemText>
                        Holo
                    </ItemText>
                </ScrollView>
            </Root>
        );
    }
}

export default HowScreen;