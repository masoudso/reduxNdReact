import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import CounterReducer from './store/reducers/counter'
import ResultReducer from './store/reducers/result'
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr : CounterReducer,
    res : ResultReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching ', action);
            const result = next(action);
            console.log('[Middleware] next state ', store.getState());
            return result;
        }
    }
} 

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
