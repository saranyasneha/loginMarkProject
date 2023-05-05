import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./studentReducer";

export default configureStore({
    reducer:{
        student:StudentReducer
    }
})