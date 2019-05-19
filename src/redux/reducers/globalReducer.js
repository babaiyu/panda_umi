const initial_state = {
    payload: {},
    fetching: false
}

export default function globalReducer(state = initial_state, action) {
    switch (action.type) {
        case 'GLOBAL':
            return {
                ...state,
                fetching: true
            }
        case 'GLOBAL_SUCCESS': {
            return{ 
                ...state,
                fetching: false,
                payload: action.payload
            }
        }
        case 'GLOBAL_FAILED': {
            return {
                ...state,
                fetching: false
            }
        }

        default:
            return state
    }
}