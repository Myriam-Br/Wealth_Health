import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import DefaultTab from './DefaultTable';
import EmployeeTab from './EmployeeTab';


function TableContainer() {

  useEffect(() => {
    handleArrayResult()
  })

  const {employeeList} = useSelector(state => state.list)
  const {array} = useSelector(state => state.numberResult)
  const {range} = useSelector(state => state.numberResult)
  
  //select which array tp display in table componentd
  function handleArrayResult() {

    //an option has been selected
    if(range !== null && range !== 0) {
      return array
    }else{
      //no option has been selected
      return employeeList
    }

  
  }

  return (<div>{employeeList === null ? (<DefaultTab/>):(<EmployeeTab array={handleArrayResult()}/>)}</div> )

}
  
  export default TableContainer;