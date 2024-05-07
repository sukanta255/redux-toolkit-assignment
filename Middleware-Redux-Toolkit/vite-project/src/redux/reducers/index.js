import { combineReducers } from 'redux';
import counterReducer from './counterreducer';

const rootReducer = combineReducers({
  // Add your reducers here
  counterReducer
});

export default rootReducer;