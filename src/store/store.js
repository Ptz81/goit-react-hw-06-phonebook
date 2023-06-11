import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import {rootReducer} from './reducer'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
 reducer: persistedReducer,
});

export default persistedReducer;
export const persist = persistStore(store)
