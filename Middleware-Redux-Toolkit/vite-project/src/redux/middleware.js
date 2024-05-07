export const actionTypeLogger = (store) => (next) => (action) => {
    console.log('Action Type:', action.type);
    return next(action);
  };
  
  export const payloadLogger = (store) => (next) => (action) => {
    console.log('Action Payload:', action.payload);
    return next(action);
  };