import {configureStore} from "@reduxjs/toolkit"
import formReducer from "./formSlice";
import listReducer from "./listSlice";
import inputReducer from "./inputSlice"
import errorReducer from "./errorSlice"
import numberResultReducer from "./numberResultSlice"


export default configureStore({
    reducer:{
        form: formReducer,
        list : listReducer,
        input : inputReducer,
        error : errorReducer,
        numberResult : numberResultReducer
    }
})