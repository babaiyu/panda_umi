import { combineReducers } from 'redux'

import globalReducer from './globalReducer'

const RootReducer = combineReducers({
    global: globalReducer,
})

export default RootReducer