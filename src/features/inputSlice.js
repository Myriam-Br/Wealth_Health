import { createSlice } from "@reduxjs/toolkit";

const initialState = {employee:{ 
   firstName : '', 
   lastName : '', 
   startDate : '', 
   department : '', 
   birthDate : '', 
   street : '', 
   city : '', 
   state : '', 
   zipCode : ''
} }

export const inputSlice = createSlice({
    name: "input",
    initialState : initialState,
    reducers: {
        getFirstName : (state, actions) => {
           state.employee.firstName = actions.payload
        },
        getLastName : (state, actions) => {
           state.employee.lastName = actions.payload
        },
        getStartDate : (state, actions) => {
           state.employee.startDate = actions.payload
        },
        getDepartment : (state, actions) => {
           state.employee.department = actions.payload
        },
        getBirthDate : (state, actions) => {
           state.employee.birthDate = actions.payload
        },
        getStreet : (state, actions) => {
           state.employee.street = actions.payload
        },
        getCity : (state, actions) => {
           state.employee.city = actions.payload
        },
        getState : (state, actions) => {
           state.employee.state = actions.payload
        },
        getZipCode : (state, actions) => {
           state.employee.zipCode = actions.payload
        },
        resetInputs : (state) =>{
         state.employee = initialState.employee
         return state
        }
    }
})

export const {getFirstName, getLastName, getBirthDate, getCity, getDepartment, getStartDate, getState, getStreet, getZipCode,  resetInputs} = inputSlice.actions
export default inputSlice.reducer