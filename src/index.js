import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
} from 'react-router';

import App from './App';
import Podcast from './Podcast';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './modules/stores';

import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router history={history}>
                <ErrorBoundary>
                    <Route exact={true} path="/" render={()=><App />}/>
                    <Route exact={true} path="/podcast" render={()=><Podcast />}/>
                </ErrorBoundary>
            </Router>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
