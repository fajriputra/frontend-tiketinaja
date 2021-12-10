/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducers from "store/auth/reducer";
import userReducers from "store/user/reducer";
import movieReducers from "store/admin/movie/reducer";
import locationReducers from "store/location/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user", "movie", "location"],
  blacklist: [],
};

const rootReducers = combineReducers({
  auth: authReducers,
  user: userReducers,
  movie: movieReducers,
  location: locationReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(promiseMiddleware, logger)
);
let persistor = persistStore(store);

export { store, persistor };
