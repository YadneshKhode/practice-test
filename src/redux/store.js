import { configureStore } from "@reduxjs/toolkit";
import pincodeReducer from "./display-container/pincodeSlice";
import dataReducer from "./display-container/dataSlice";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux"; 
import { persistStore } from 'redux-persist'
import selectReducer from "./display-container/selectedSlice"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
  serve: pincodeReducer,
  display: dataReducer,
  select: selectReducer
 });


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);


