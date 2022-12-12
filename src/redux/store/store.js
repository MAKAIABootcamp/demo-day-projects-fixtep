import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../reducers/adminReducer";
import { citaReducer } from "../reducers/citasReduccer";
import { trabajosReducer } from "../reducers/trabajosReducer";
import { userReducer } from "../reducers/userReducers";
import { workerReducer } from "../reducers/workerReducer";

const reducer = {
  user: userReducer,
  contratistaStore: workerReducer,
  adminStore: adminReducer,
  imagenes: trabajosReducer,
  citaStore: citaReducer,
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
