import {createSlice} from "@reduxjs/toolkit"

const initialState = {isPending:false, isSent:false, isRejected:false, isValid:false}

export const formSlice = createSlice({
    name:"form",
    initialState : initialState,
    reducers: {
     pendingForm : (state) => {
          state.isPending = true
     },
     validateForm : (state) => {
          state.isPending = false
          state.isSent = true
          state.isRejected = false
     },
     rejectForm : (state) => {
          state.isPending = false
          state.isSent = false
          state.isRejected = true
     },
     resetForm : (state) => {
          state = initialState
          return state
     },
    }
})

export const {pendingForm, validateForm, rejectForm, resetForm} = formSlice.actions
export default formSlice.reducer