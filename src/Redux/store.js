import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import taskReducer from "./reducer";


const reducer = {
    taskReducer
}

const middleWare = applyMiddleware(thunk)

const store = configureStore({
    reducer,
    middleWare
})

export default store;


