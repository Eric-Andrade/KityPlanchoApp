import { FETCHALLSERVICIOSACTIVOS } from './actions';

const INITIAL_STATE = {
    allserviciosactivos: {
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
         case `${FETCHALLSERVICIOSACTIVOS}_PENDING`:
            return INITIAL_STATE;
         case `${FETCHALLSERVICIOSACTIVOS}_FULFILLED`:
            return{
                allserviciosactivos: {
                    data: action.payload,
                    isFetched: true,
                    error: {
                        on: false,
                        message: null
                    }
                }
            };
         case `${FETCHALLSERVICIOSACTIVOS}_REJECTED`:
            return{
                allserviciosactivos: {
                    data: [],
                    isFetched: true,
                    error: {
                        on: true,
                        message: 'Error fetching services active list'
                    }
                }
            };
             
         default:
             return state;
     }
 };