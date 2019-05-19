import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

//redux
import { connect } from 'react-redux'
import { globalAction } from '../../redux/actions/globalAction'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            total: this.props.data.pressed
        }
    }

    _onPress = () => {
        this.setState({ total: this.state.total + 1 })
        let payload = {
            pressed: this.state.total
        }
        this.props.dispatch(globalAction(payload))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fontBold}>Total Panda Pressed: {this.props.data.pressed}</Text>
                <TouchableOpacity onPress={this._onPress} style={styles.button}>
                    <Text style={styles.textWhite}>CLICK ME!</Text>
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