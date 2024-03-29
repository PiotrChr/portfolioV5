import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import { configureStore } from './store/store';
import App from './components/App';
import IntlProvider from './i18n/intlProvider';
import createHistory from './store/history';

const history = createHistory();

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
    window.store ||
    configureStore({
        initialState: window.__PRELOADED_STATE__,
        history,
    });

hydrate(
    <Provider store={store}>
        <Router history={history}>
            <IntlProvider>
                <App />
            </IntlProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
);

// if (process.env.NODE_ENV === 'development') {
//     if (module.hot) {
//         module.hot.accept();
//     }

//     if (!window.store) {
//         window.store = store;
//     }
// }
