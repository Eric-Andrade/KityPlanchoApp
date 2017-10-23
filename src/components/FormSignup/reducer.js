import {
    POSTCLIENTE,
    POSTCLIENTESUCCESS,
    POSTCLIENTEERROR
} from './actions';

const INITIAL_STATE = {
    error: {
        on: false,
        message: null
    },
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POSTCLIENTE:
            return{
                ...INITIAL_STATE,
                isLoading: true
            };
        case POSTCLIENTESUCCESS:
            return{
                ...INITIAL_STATE,
                isLoading: false
            };
        case POSTCLIENTEERROR:
            return{
                error: {
                    on: true,
                    message: 'Error guardando cliente'
                },
                isLoading: false
            };
        default:
            return state;
    }
};