import rootReducer from './Reducer/index';
import {createStore} from 'redux';

const Store = createStore(rootReducer);
export default Store;