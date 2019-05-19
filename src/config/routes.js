import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'

const AppNavigation = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
})

export default createAppContainer(AppNavigation)