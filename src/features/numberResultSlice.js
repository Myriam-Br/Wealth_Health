import {createSlice} from "@reduxjs/toolkit"

const initialState = { range: null, currentValue : 0, currentPage:1, status: null, array : []}

export const numberResultSlice = createSlice({
    name:"numberResult",
    initialState : initialState,
    reducers: {
        tableRange : (state, actions) => {
            state.range = actions.payload
        },
        getCurrentValue : (state, actions) => {
            state.currentValue = actions.payload
        },
        switchPage: (state, actions) => {
            state.currentPage = actions.payload
        },

        getStatus: (state, actions) => {

            state.status = actions.payload
        },

        getResults : (state, actions) => {
            state.array = actions.payload
        },

        resetNumberResult : (state) => {
            state = initialState
            return state
        },
   

    }
})

export const { tableRange, getCurrentValue, resetNumberResult, switchPage, getStatus, getResults} = numberResultSlice.actions
export default numberResultSlice.reducer