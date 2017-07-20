console.log('**INITIATE STORE');
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from './redux/reducer';

const middleware = applyMiddleware(loggerMiddleware, thunkMiddleWare);
export default createStore(rootReducer, middleware);