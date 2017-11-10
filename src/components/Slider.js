import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import PropTypes from 'prop-types';
import items from './Banners';

const {width} = Dimensions.get('window')

const Root = styled.View`
    flex: 1;
    justifyContent: center;

`;
const Image = styled.Image`
    flex: 1;
    width: ${width};
`;

const Slider = props => (
    <Root>
        <Image source={props.uri}/>
    </Root>
)

export default class  extends Component {
    constructor(props){
        super(props)
        this.state = { 
            items
         }  
    }
    
    render() {
        return (
            <Swiper
            autoplay
            showsPagination
            autoplayTimeout={5}
            index={0}
            height={240}>
                {this.state.items.map((item, i) => <Slider uri={item.screen} key={i}/>)}
            </Swiper>
        );
    }
}

