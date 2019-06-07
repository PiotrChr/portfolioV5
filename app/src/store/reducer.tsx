import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import env from './actions/env/reducer';

const createRootReducer = (history: History) =>
    combineReducers({
        app: env,
        router: connectRouter(history),
    });

export default createRootReducer;
