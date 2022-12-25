import { createSlice } from "@reduxjs/toolkit";
const initialState = {employeeList : []}

export const listSlice = createSlice({
    name: "list",
    initialState : initialState,
    reducers: {
        createEmployee : (state, actions) => {
            console.log('TEST',actions.payload);
            if(JSON.parse(localStorage.getItem('employees'))) {
                state.employeeList = JSON.parse(localStorage.getItem('employees'))
            }else{
                state.employeeList = []
            }

            state.employeeList.push(actions.payload);
            localStorage.setItem('employees',JSON.stringify(state.employeeList))
        },
        sortedArray: (state, actions) => {
            state.employeeList = actions.payload
        },
        getArray: (state) => {
            state.employeeList = JSON.parse(localStorage.getItem('employees'))
        },
        searchArray: (state,actions) => {
            let filteredArray = []
            let array = JSON.parse(localStorage.getItem('employees'))
            if(actions.payload.length > 0) {
                array.map((employee) => {
                    Object.values(employee).filter((value) => {
                      if((value.toLowerCase()).startsWith(actions.payload)) {
                        filteredArray.push(employee)  
                      }
                      return value
                    })
                    return employee
                }) 
                //remove same elements
                state.employeeList = [...new Set(filteredArray)]
            }else{
                state.employeeList = array
            }  
            
        }
    }
})

export const {createEmployee, sortedArray, getArray, searchArray} = listSlice.actions
export default listSlice.reducer