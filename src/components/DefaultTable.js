import React from "react";
import { categoriesTable } from '../data/formData';
import Table from 'react-bootstrap/Table';

function DefaultTab(){
    return (
        <Table>
            <thead>
                <tr> 
                    {categoriesTable.map((category, index) => {
                    return <th key={index}>{category.label}</th> 
                    })}
                </tr>
            </thead>
            <tbody>
                <tr className='employee_in_tab'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
        </Table>
    )
};

export default DefaultTab;