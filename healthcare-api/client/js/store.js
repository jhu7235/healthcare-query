console.log('**INITIATE STORE');
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
export default createStore(rootReducer);
