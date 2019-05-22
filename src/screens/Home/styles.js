import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window')
let widthLong = window.width
let heightLong = window.height

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F8BBD0"
    },
    card: {
        width: widthLong / 2,
        height: heightLong / 8,
        borderColor: '#E91E63',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    fontBold: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#C2185B',
        fontFamily: 'GochiHand-Regular'
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: '#1976D2',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    textWhite: {
        color: '#fff'
    }
})