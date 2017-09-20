import { FETCHPDP } from './actions';

const INITIAL_STATE = {
    pdp: {
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
         case `${FETCHPDP}_PENDING`:
            return INITIAL_STATE;
         case `${FETCHPDP}_FULFILLED`:
            return{
                pdp: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
         case `${FETCHPDP}_REJECTED`:
            return{
                pdp: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error fetching pdp list'
                    }
                }
            };
             
         default:
             return state;
     }
 };