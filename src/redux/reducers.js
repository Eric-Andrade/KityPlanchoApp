import { combineReducers } from 'redux';
import HistoricalReducer from '../screens/redux/HistoricalReducer'
import ServicesReducer from '../screens/redux/ServicesReducer'

export default combineReducers({
    historical: HistoricalReducer,
    services: ServicesReducer
});