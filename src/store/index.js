/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import authReducers from "store/auth/reducer";
import userReducers from "store/user/reducer";
import movieReducers from "store/admin/movie/reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "user"],
  blacklist: [],
};

const rootReducers = combineReducers({
  auth: authReducers,
  user: userReducers,
  movie: movieReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(promiseMiddleware, logger)
);
let persistor = persistStore(store);

export { store, persistor };
