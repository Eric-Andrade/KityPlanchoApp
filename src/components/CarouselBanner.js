import React, { Component } from 'react';
import { Dimensions, PanResponder, View, Animated, Alert } from 'react-native';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import PropTypes from 'prop-types';

const heighslide = 150;
const Root = styled(Touchable).attrs({
    feedback: 'none'
})`

`;
const ImageBanner = styled.Image`
`;
const BackImage = styled.Image`
    flex: 1;
    resizeMode: cover;
    zIndex: 1;
`;
// const TitleContainer = styled.View`
//     backgroundColor: transparent;
//     position: absolute;
//     top: 330;
//     left: 200;
//     right: 0;
//     overflow: hidden
// `;

export default class CarouselBanner extends Component{
    
    static propTypes = {
        items: PropTypes.array
    }

    constructor(props){
        super(props)
        const {width} = Dimensions.get('window')
        this.state = {
            width,
            page: 0,
            translate: new Animated.Value(0)

        }
    }

    componentWillMount(){
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) =>  Math.abs(gestureState.dx) > 7,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: () => false,
            onPanResponderMove: Animated.event([null, {dx: this.state.translate}]),
            onPanResponderRelease: this.endGesture.bind(this),
            onPanResponderTerminate: (evt, gestureState) => {
                console.warn('terminé')
            },
            onShouldBlockNativeResponder: (evt, gestureState) => true, 
        })
    }

    getStyle(){
            return {
                slider: {
                    flexDirection: 'row',
                    height: 150,
                    width: (this.props.items.length + 2) * this.state.width,
                    left: (this.state.page + 1) * -1 * this.state.width,
                    transform: [{
                        translateX: this.state.translate
                    }],
                    borderRadius: 10,
                    justifyContent: 'center',
                },
                slide: {
                    width: this.state.width,
                    height: 175,
                    position: 'relative',
                    // backgroundColor: 'pink',
                    borderRadius: 10,
                    marginTop: 2,
                },
                screen: {
                    width: this.state.width,
                    height: 150,
                    borderRadius: 10,
                },
                poster: {
                    position: 'absolute',
                    top: 97,
                    left: 25,
                    height: '45%',
                    width: '17%'
                },
                titleContainer: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    top: 90,
                    left: 200,
                    right: 0,
                    overflow: 'hidden'
                },
                title: {
                    fontSize: 18,
                    left: 100,
                    justifyContent: 'center'
                }
            }    
    }

    endGesture(evt, gestureState){
        let toValue = 0
        if (Math.abs(gestureState.dx) / this.state.width > 0.2) {
            if (gestureState.dx < 0) {
                toValue = this.state.width * -1
            } else{
                toValue = this.state.width
            }
        }
        Animated.timing(
            this.state.translate,
            {
                duration: 300,
                toValue,
                useNativeDriver: true
            }
        ).start(() => {
            this.state.translate.setValue(0)
            if (toValue < 0) {
                this.nextPage()
            } else if(toValue > 0){
                this.prevPage()
            }
        })
    }

    nextPage(){
        let page = this.state.page + 1
        if (page >= this.props.items.length) {
            page = 0
        }
        this.setState({ page })
    }

    prevPage(){
        let page = this.state.page - 1
        if (page < 0) {
            page = this.props.items.length - 1
        }
        this.setState({ page })
    }

    posterTranslate(i){
        const factor = 2;

        if(i === this.state.page){
            return this.translateX(
                Animated.divide(this.state.translate, factor)
            )
        }
        if(i === this.state.page +1){
            return this.translateX(
                Animated.divide(
                    Animated.add(this.state.translate, new Animated.Value(this.state.width)), factor)
            )
        }
        if(i === this.state.page -1){
            return this.translateX(
                Animated.divide(
                    Animated.add(this.state.translate, new Animated.Value(this.state.width * -1)), factor)
            )
        }
        return this.translateX(new Animated.Value(0))
    }

    translateX(animation){
        return{
            transform: [{
                translateX: animation
            }]
        }
    }

    touchBanner(name){
        Alert.alert(`Hiciste click en ${name}`)
    }
    
    renderBanner(item, i){
        const style = this.getStyle()
        return(
                <View key={i} style={style.slide}>
                    <Root onPress={() => this.touchBanner(item.name)}>
                        <ImageBanner source={ item.screen || null } style={style.screen}/>
                    </Root>
                    <Animated.Image source={ item.poster } style={[style.poster, this.posterTranslate(i)]}/>
                    <Animated.Text style={[style.title, this.posterTranslate(i)]}>{item.name}</Animated.Text>
                </View>
        )
    }
    

    render () {
        const style = this.getStyle()
        return (
            <BackImage style={{width: this.state.width, height: null}}
                source={require('../../assets/backgroundgray.png')}>
                <Animated.View {...this.panResponder.panHandlers} style={style.slider}>
                    {this.renderBanner(this.props.items[this.props.items.length - 1], -1)}
                    {this.props.items.map(this.renderBanner.bind(this))}
                    {this.renderBanner(this.props.items[0], this.props.items.length)}
                </Animated.View>
          </BackImage>
        )
      }
}