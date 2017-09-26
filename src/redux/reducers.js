import { combineReducers } from 'redux';
import HistoricalReducer from '../screens/redux/HistoricalReducer';
import HOrderReducer from '../screens/redux/HOrderReducer';
import ServicesReducer from '../screens/redux/ServicesReducer';
import OrdersClientReducer from '../screens/redux/OrdersClientReducer';

export default combineReducers({
    historical: HistoricalReducer,
    oneOrder: HOrderReducer,
    services: ServicesReducer,
    ordersclient: OrdersClientReducer
});