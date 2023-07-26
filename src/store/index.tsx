// import {
//   applyMiddleware,
//   compose,
//   legacy_createStore as createStore,
// } from "redux";
// import rootReducer from "../reducers";
// import thunk from "redux-thunk";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));
// const store = createStore(rootReducer, enhancer);

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import productReducer from "../slices/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
