import { FETCHONEPDPR } from './actions';

const INITIAL_STATE = {
    onepdpr: {
        data: [],
        isFetched: false,
        error: {
            on: false,
            message: null
        }
    }
 };

 export default (state = INITIAL_STATE, action) => {
     switch (action.type) {
         case `${FETCHONEPDPR}_PENDING`:
            return INITIAL_STATE;
         case `${FETCHONEPDPR}_FULFILLED`:
            return{
                onepdpr: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
         case `${FETCHONEPDPR}_REJECTED`:
            return{
                onepdpr: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error fetching one pdpr'
                    }
                }
            };
             
         default:
             return state;
     }
 };