import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ButtonSort from './ButtonSort';
import { categoriesTable } from '../data/formData';
import DefaultTab from './DefaultTable';


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
    if(range !== null) {
      return array
    }else{
      //no option has been selected
      return employeeList
    }
  }
  let employeesArray = handleArrayResult()
  
  //if value of employeeList null display degaultTab, else display Tab with data from employeeList
  if(employeeList === null) {
    return <DefaultTab></DefaultTab>
  }else{
    return (
      <Table>
      <thead>
        <tr> 
          {categoriesTable.map((category, index) => {
            return <th key={index}><ButtonSort title = {category.title} section = {category.id}></ButtonSort></th> 
          })}
        </tr>
      </thead>
      <tbody>
        {employeesArray.map((employee, index)=>{  
          return(
          <tr className='employee_in_tab' key={index}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zipCode}</td>
          </tr>
        )
        })}
      </tbody>
    </Table>
  );
  }

}
  
  export default TableContainer;