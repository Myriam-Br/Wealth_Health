import React from "react";
import { useDispatch} from "react-redux";
import { numbers } from "../data/formData";
import {getCurrentValue, resetNumberResult, switchPage, tableRange} from "../features/numberResultSlice";
import { getStatus } from "../features/numberResultSlice";
import SelectOption from "../lib/SelectOption";
import SearchBar from "../components/SearchBar";
import SelectNumber from "../components/SelectNumber";
import TableContainer from "../components/TableContainer";
import HandleLink from "../components/HandleLink";

function EmployeeList() {
    const dispatch = useDispatch()

    function handleStatus(value) {
        
        if(value === 'All') {
            value = "0"
            dispatch(tableRange(parseInt(value)))
        }else{
            dispatch(tableRange(parseInt(value)))
        }


        dispatch(tableRange(parseInt(value)))
        dispatch(getStatus('current'))
        dispatch(switchPage(1))
        dispatch(getCurrentValue(0))
    }

    function valueInput(value, input){
      switch(input) {
        case 'number':
            handleStatus(value)
            break
        default:
            console.log('some error');
      }
    }


    return <div className="container list">
        <h2>Employee List</h2>
        <div className="first_container">
            <SelectOption name="name" title='Results' label="Number" id="number" list={numbers} onChange={(e) => valueInput(e.target.value, 'number')}/>
            <SearchBar/>
        </div>
        <TableContainer/>
        <SelectNumber/>
        <HandleLink to = {'/createemployee'} onClick={() => dispatch(resetNumberResult())} text={'Home'}/>
    </div>
}

export default EmployeeList