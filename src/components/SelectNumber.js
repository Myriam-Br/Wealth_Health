import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArray} from "../features/listSlice";
import { switchPage, getCurrentValue, getStatus, getResults} from "../features/numberResultSlice";
import handleDisplay from "../hooks/handleDisplayData";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import ButtonComponent from "./ButtonComponent";

function SelectNumber(){
    const dispatch = useDispatch()

    //get pages status -> 'increment' for next and 'decrement for previous
    const {status} = useSelector(state => state.numberResult)

    //get current page number
    const {currentPage} = useSelector(state => state.numberResult)

    //get range 
    const {range} = useSelector(state => state.numberResult)

    //get employee list
    const {employeeList} = useSelector(state => state.list)

    //get current value
    const {currentValue} = useSelector(state => state.numberResult)

    //number of page needed
    function numPages() {
        if(range === null || range === 0) {
            return 1
        }else{
            return Math.ceil(employeeList.length / range )
        }
    }


    /////HANDLE DATA TO DISPLAY///// 
    useEffect(() => {
        try{
            if(range !== null) {
                //displayData('current')
                dispatch(getResults(handleDisplay(currentValue, employeeList, range, status)))
            }
        }catch{
            console.log('some error');
        }

    },[dispatch, employeeList, currentValue, currentPage, range, status])
    

   
    /////HANDLE CURRENT PAGE AND CURRENT VALUE/////
    //next button actions
    function increment(){
        if((currentPage) < numPages()) {
            dispatch(getArray())
  
            //update value current page -> increase current page value
            dispatch(switchPage(currentPage+1))

            //update current value
            dispatch(getCurrentValue(currentValue + range)) 

            //update status of current action
            dispatch(getStatus('increment'))
        }else{
            console.log('NO MORE PAGES OR VALUE NOT SELECTED');
        }
    }

    //previous button actions
    function decrement() {
        if((currentPage) > 1) {

            dispatch(getArray())
          
            //update value current page -> decrease curent page value 
            dispatch(switchPage(currentPage-1))

            //update current value
            dispatch(getCurrentValue(currentValue - range)) 

            //update status of current action
            dispatch(getStatus("decrement"))
        }else{
            console.log('NO MORE PAGES OR VALUE NOT SELECTED');
        }
    }

    //previous or next page -> increment or decrement current page
    function handlePages(btn){
        switch(btn) {
            case 'next':
            increment()
            break

            case 'previous':
            decrement()
            break

            default: 
            console.log('button does not exist');
        }
    }

    return(<div>
        <p  className='pagination'>Show {currentPage} of {numPages()}</p>
        {range!==null ?( <div className="button_previous_next">
                <ButtonComponent onClick = {() => handlePages('previous')} label = "previous page" icon={<FiChevronsLeft/>}/>
                <span>{currentPage}</span>
                <ButtonComponent onClick = {() => handlePages('next')} label = "next page"  icon={<FiChevronsRight/>}/>
                </div>
                ):(<p></p>)}
    </div>)
   
}

export default SelectNumber