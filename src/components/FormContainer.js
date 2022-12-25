import React from "react";
import {useDispatch, useSelector} from "react-redux"
import Button from 'react-bootstrap/Button';
import { createEmployee } from "../features/listSlice";
import {validateForm, rejectForm} from "../features/formSlice";
import { getFirstNameError, getLastNameError, getCityError, getZipCodeError, getStreetError, getErrorForm } from "../features/errorSlice";
import ModalContainer from "./Modal";
import FormGroup from "./FormGroupInputs";

function FormContainer () {
    const dispatch = useDispatch()
    //handle input employee
    const {employee} = useSelector(state => state.input)
    console.log('EMPLOYEE',employee);
    const {employeeList} = useSelector(state => state.list)   
    console.log('LIST',employeeList); 
    //handle error inputs
    const {formError} = useSelector(state => state.error)

    //status form
    const {isSent} = useSelector(state => state.form)

    function handleForm(newEmployee) { 
        let employeeForm = Object.entries(newEmployee).filter(([key, value]) =>  value === '' || value === "undefined")

        try {       
            if(employeeForm.length > 0) {
                dispatch(rejectForm())
                dispatch(getErrorForm('Make sure to fill all the fields !'))
            } 
            else{
                dispatch(validateForm())
                dispatch(getErrorForm(''))
                //add new employee to array
                dispatch(createEmployee(newEmployee)) 
            }
        }
        catch {
           console.log('some error');
        } 

        return isSent

    }

    function handleError() {
        let inputValueArray = Object.entries(employee)
        inputValueArray.map((elt) =>  {
           if(elt[1] === '') {
                switch(elt[0]){
                    case 'firstName':
                        dispatch(getFirstNameError('Firstname must contain only letters and no spaces'))
                        break
            
                    case 'lastName':
                        dispatch(getLastNameError('Lastname must contain only letters and no spaces'))
                        break

                    case 'city':
                        dispatch(getCityError('City must contain only letters '))
                        break
            
                    case 'street':
                        dispatch(getStreetError('Street must contain only letters'))
                        break
            
                    case 'zipCode':
                        dispatch(getZipCodeError('Zipcode must contain only 5 numbers and no spaces'))
                        break

                    default:
                    console.log("input doesn't exist");
                } 
            }
   
        })
    }

    //send form 
    async function submitForm(e, validate) {  
        await validate 
        e.preventDefault()  
        handleError()
    }


   

    return <div className="create-employee">
        <FormGroup/>
        <Button className="submit_button" variant="primary" type="submit" onClick={(e) => submitForm(e, handleForm(employee))}>Save</Button>
        <h4 className="message_form_not_valid">{formError}</h4>
        <ModalContainer/>
    </div>
}


export default FormContainer;