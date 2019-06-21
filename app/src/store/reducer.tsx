import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import env from './actions/env/reducer';
import content from './actions/content/reducer';

const createRootReducer = (history: History) =>
    combineReducers({
        app: combineReducers({
            env,
            content
        }),
        router: connectRouter(history),
    });

export default createRootReducer;
