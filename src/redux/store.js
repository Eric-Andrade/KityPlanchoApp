import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

import reducers from './reducers';

const middlewares = [
    promiseMiddleware(),
    thunk,
];

if(__DEV__){ //eslint-disable-line
    middlewares.push(createLogger());
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default createStore(
    reducers,
    undefined,
    enhancers(applyMiddleware(...middlewares))
);