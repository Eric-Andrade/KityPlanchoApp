import { CHECKEMAIL } from './actions';

const INITIAL_STATE = {
    getemail: {
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
         case `${CHECKEMAIL}_PENDING`:
            return INITIAL_STATE;
         case `${CHECKEMAIL}_FULFILLED`:
            return{
                getemail: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
         case `${CHECKEMAIL}_REJECTED`:
            return{
                getemail: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error fetching email registered'
                    }
                }
            };
             
         default:
             return state;
     }
 };