import { FETCHALLPDPC } from './actions';

const INITIAL_STATE = {
    allpdpc: {
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
         case `${FETCHALLPDPC}_PENDING`:
            return INITIAL_STATE;
         case `${FETCHALLPDPC}_FULFILLED`:
            return{
                allpdpc: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
         case `${FETCHALLPDPC}_REJECTED`:
            return{
                allpdpc: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error fetching pdpc list'
                    }
                }
            };
             
         default:
             return state;
     }
 };