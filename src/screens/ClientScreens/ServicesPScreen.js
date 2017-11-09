import React, { Component } from 'react';
import { ScrollView, Platform} from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { colors } from '../../util/constants';

const Root = styled(Touchable).attrs({
    feedback: 'none'
})`
    flex: 1;
    marginVertical: 30;
    marginHorizontal: 40;
   
`
const InfoContainer = styled.View`
    flex: 1;
    width: 100%;
    alignItems: center;
    justifyContent: center;
`;
const ItemText = styled.Text`
    color: ${colors.GRAY600};
    fontSize: ${Platform.OS === 'ios' ? 16 : 13};
    fontWeight: ${Platform.OS === 'ios' ? 400 : 300 };
    textAlign: justify
`;

class ServicesPScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name
      });

    render() {
        const { params } = this.props.navigation.state;
        return (
            <ScrollView>
                <Root>
                    <InfoContainer>
                        <ItemText>
                            {params.name}
                        </ItemText>
                    </InfoContainer>
                </Root>
            </ScrollView>
        );
    }
}

export default ServicesPScreen;