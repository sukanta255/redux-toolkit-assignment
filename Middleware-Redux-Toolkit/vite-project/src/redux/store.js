import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { actionTypeLogger, payloadLogger } from './middleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(actionTypeLogger, payloadLogger),
});

export default store;
