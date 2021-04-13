import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers';
import { ApiMiddleware } from './store/middleware';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(
        ApiMiddleware,
    ))
);

export { store };