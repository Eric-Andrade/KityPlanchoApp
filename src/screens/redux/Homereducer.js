import { FETCHCLIENTS } from './actions';

const INITIAL_STATE = {
    Clients: {
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
         case `${FETCHCLIENTS}_PENDING`:
            return INITIAL_STATE;
         case `${FETCHCLIENTS}_FULFILLED`:
            return{
                Clients: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
         case `${FETCHCLIENTS}_REJECTED`:
            return{
                Clients: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error fetching clients list'
                    }
                }
            };
             
         default:
             return state;
     }
 };