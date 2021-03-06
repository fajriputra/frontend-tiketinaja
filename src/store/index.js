/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { keyEncrypt } from "config";
import promiseMiddleware from "redux-promise-middleware";
import storage from "redux-persist/lib/storage";

import authReducers from "store/auth/reducer";
import userReducers from "store/user/reducer";
import movieReducers from "store/admin/movie/reducer";
import scheduleReducers from "store/admin/schedule/reducer";
import locationReducers from "store/location/reducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${JSON.stringify(keyEncrypt)}`,
    }),
  ],
};

const rootReducers = combineReducers({
  auth: authReducers,
  user: userReducers,
  movie: movieReducers,
  schedule: scheduleReducers,
  location: locationReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(promiseMiddleware)
);
let persistor = persistStore(store);

export { store, persistor };
