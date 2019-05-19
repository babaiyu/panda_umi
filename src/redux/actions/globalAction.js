export function globalAction(payload){
    return dispatch=>{
        dispatch(requestState('global'))
        console.log(payload)
        const response = payload
        return dispatch(successState('global', response, payload))
    }
}


//type state
export function requestState(type) {
    if(type == 'global') {
        return {
            type: 'GLOBAL'
        }
    }
}

export function successState(type, payload) {
    if(type == 'global') {
        return {
            type: 'GLOBAL_SUCCESS',
            payload: payload
        }
    }
}

export function failedState(type) {
    if(type == 'global'){ 
        return {
            type: 'GLOBAL_FAILED'
        }
    }
}