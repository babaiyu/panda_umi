import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { connect } from 'react-redux'
import { globalAction } from '../../redux/actions/globalAction'
import styles from './styles'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            total: this.props.data.pressed ? this.props.data.pressed : 0,
            color: '#62B42C',
        }
        this.springValue = new Animated.Value(0.3)
    }

    _onPress = () => {
        this.setState({ total: this.state.total + 1 })
        let payload = {
            pressed: this.state.total
        }
        this.props.dispatch(globalAction(payload))
        this.spring()
    }

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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fontBold}>Total Panda Pressed: {this.props.data.pressed}</Text>
                <TouchableOpacity onPress={this._onPress}>
                    {/* <Text style={styles.textWhite}>CLICK ME!</Text> */}
                    <Animated.Image
                        style={{ width: 227, height: 200, transform: [{ scale: this.springValue }] }}
                        source={require('../../assets/img/panda.png')}
                    />
                </TouchableOpacity>
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