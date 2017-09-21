import { FETCHALLPDPR } from './actions';

const INITIAL_STATE = {
    allpdpr: {
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
         case `${FETCHALLPDPR}_PENDING`:
            return INITIAL_STATE;
         case `${FETCHALLPDPR}_FULFILLED`:
            return{
                allpdpr: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
         case `${FETCHALLPDPR}_REJECTED`:
            return{
                allpdpr: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error fetching pdpr list'
                    }
                }
            };
             
         default:
             return state;
     }
 };