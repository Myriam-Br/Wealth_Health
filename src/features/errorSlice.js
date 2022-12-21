import { createSlice } from "@reduxjs/toolkit";

const initialState = {firstNameError:'', lastNameError:'', zipCodeError:'',cityError:'',streetError:'', formError:''}

export const errorSlice = createSlice({
    name: "error",
    initialState : initialState,
    reducers: {
        getFirstNameError : (state, actions) => {
           state.firstNameError = actions.payload
        },
        getLastNameError : (state, actions) => {
           state.lastNameError = actions.payload
        },
        getZipCodeError: (state, actions) => {
           state.zipCodeError = actions.payload
        },
        getCityError: (state, actions) => {
           state.cityError = actions.payload
        },
        getStreetError : (state, actions) => {
           state.streetError = actions.payload
        },
        getErrorForm : (state, actions) => {
            state.formError = actions.payload
        },
        resetErrorForm:(state) => {
         state = initialState
         return state
        }
    }
})

export const {getFirstNameError, getLastNameError, getZipCodeError, getCityError, getStreetError, getErrorForm, resetErrorForm} = errorSlice.actions
export default errorSlice.reducer