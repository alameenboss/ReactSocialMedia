import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import allReducer from './reducers';
const middleware = applyMiddleware(logger,thunk);
export default createStore(allReducer,middleware);

// import {createStore} from 'redux';
// import allReducer from './reducers';
// const store = createStore(allReducer);
// export default store;