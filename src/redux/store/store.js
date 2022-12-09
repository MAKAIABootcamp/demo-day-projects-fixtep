import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../reducers/adminReducer";
import { userReducer } from "../reducers/userReducers";
import { workerReducer } from "../reducers/workerReducer";

const reducer = {
    //user: userReducer,
    user: userReducer,
    contratistaStore: workerReducer,
    adminStore: adminReducer
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