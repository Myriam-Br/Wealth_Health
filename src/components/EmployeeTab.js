import React from "react";
import { categoriesTable } from '../data/formData';
import Table from 'react-bootstrap/Table';
import ButtonSort from './ButtonSort';

function EmployeeTab({array}) {
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
          {array.map((employee, index)=>{  
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
    )
}

export default EmployeeTab