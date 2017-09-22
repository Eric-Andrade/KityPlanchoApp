import { combineReducers } from 'redux';
import HistoricalReducer from '../screens/redux/HistoricalReducer';
import HOrderReducer from '../screens/redux/HOrderReducer';
import ServicesReducer from '../screens/redux/ServicesReducer';

export default combineReducers({
    historical: HistoricalReducer,
    oneOrder: HOrderReducer,
    services: ServicesReducer
});