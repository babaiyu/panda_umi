import React, { Component } from 'react'
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import { connect } from 'react-redux'
import { globalAction } from '../../redux/actions/globalAction'
import styles from './styles'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            total: this.props.data.pressed == null ? 0 : this.props.data.pressed,
        }
        this.springValue = new Animated.Value(0.3)
    }

    // Handle Press
    _onPress = () => {
        this.setState({ total: this.state.total + 1 })
        let payload = {
            pressed: this.state.total
        }
        this.props.dispatch(globalAction(payload))
        this.spring() //<-- call animation when button pressed
        this.playSound() //<-- call sound when button pressed
    }
    //Handle Press

    //animation
    spring = () => {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start()
    }
    //animation

    //play sound
    playSound = () => {
        try {
            SoundPlayer.playSoundFile('tuturu', 'wav')
        } catch (error) {
            alert(error)
        }
    }
    //play sound

    render() {
        let { pressed } = this.props.data
        const { container, card, fontBold, title, image } = styles
        return (
            <View style={container}>
                <View style={card}>
                    <Text style={[fontBold, title]}>{pressed ? pressed : 0}</Text>
                </View>
                <TouchableWithoutFeedback onPress={this._onPress}>
                    <Animated.Image style={[image, { transform: [{ scale: this.springValue }] }]} source={require('../../assets/img/panda.png')} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

function stateToProps(state) {
    return {
        data: state.global.payload
    }
}

export default connect(stateToProps)(Home)