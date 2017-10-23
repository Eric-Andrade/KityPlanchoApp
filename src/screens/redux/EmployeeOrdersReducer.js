import { GETSUMAPDPR } from './actions';

const INITIAL_STATE = {
    sumapdpr: {
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
         case `${GETSUMAPDPR}_PENDING`:
            return INITIAL_STATE;
         case `${GETSUMAPDPR}_FULFILLED`:
            return{
                sumapdpr: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
         case `${GETSUMAPDPR}_REJECTED`:
            return{
                sumapdpr: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error fetching pdpr count'
                    }
                }
            };
             
         default:
             return state;
     }
 };