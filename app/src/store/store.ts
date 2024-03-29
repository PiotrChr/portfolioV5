import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import createRootReducer from './reducer';

type StoreParams = {
    history: History;
    initialState?: { [key: string]: any };
    middleware?: any[];
};

export const configureStore = ({ history, initialState, middleware = [] }: StoreParams) => {
    const devtools =
        typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

    const composeEnhancers = devtools || compose;

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(
            applyMiddleware(...[thunk, routerMiddleware(history)].concat(...middleware))
        )
    );

    return store;
};

export default configureStore;
