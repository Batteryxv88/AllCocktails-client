
// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';
// import { applyMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';


// export const store = configureStore({
//   reducer: rootReducer,
// });

// export type AppDispatch = typeof store.dispatch;

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';  // Ваш корневой редьюсер

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export type AppDispatch = typeof store.dispatch;

// //export default store;
