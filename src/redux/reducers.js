import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import HistoricalReducer from '../screens/redux/HistoricalReducer';
import HOrderReducer from '../screens/redux/HOrderReducer';
import ServicesReducer from '../screens/redux/ServicesReducer';
import OrdersClientReducer from '../screens/redux/OrdersClientReducer';
import EmployeeOrdersReducer from '../screens/redux/EmployeeOrdersReducer'
import PostClienteReducer from '../components/FormSignup/reducer';

export default combineReducers({
    historical: HistoricalReducer,
    oneOrder: HOrderReducer,
    services: ServicesReducer,
    ordersclient: OrdersClientReducer,
    employeeorderscount: EmployeeOrdersReducer,
    postclient: PostClienteReducer,
    form
});