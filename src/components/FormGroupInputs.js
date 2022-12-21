import React from "react";
import { useDispatch} from "react-redux";
import FormInput from "./FormInput";
import { getFirstName, getLastName, getBirthDate, getCity, getDepartment, getStartDate, getState, getStreet, getZipCode } from "../features/inputSlice";
import { getFirstNameError, getLastNameError, getCityError, getZipCodeError, getStreetError } from "../features/errorSlice";
import validateSyntax from "../checkForm";
import { pendingForm } from "../features/formSlice";
import { departmentTab, inputsArray, statesTab  } from "../data/formData";
import SelectOption from "../lib/SelectOption";


function FormGroup() {
    const dispatch = useDispatch()

    //get inputs value
    let first_row = inputsArray.filter((elt) => elt.row === 'first')
    let second_row = inputsArray.filter((elt) => elt.row === 'second')
    let third_row = inputsArray.find((elt) => elt.row === 'third')


    function valueInput(value, input){
        dispatch(pendingForm())

        let res = validateSyntax(input, value) 
            if(res !== 'undefined') {
                switch(input) {
                    case 'firstname':
                        dispatch(getFirstName(res))
                        dispatch(getFirstNameError(''))
                        break
            
                    case 'lastname':
                        dispatch(getLastName(res))
                        dispatch(getLastNameError(''))
                        break
            
                    case 'birthdate':
                        dispatch(getBirthDate(res))
                        dispatch(getCityError(''))
                        break
            
                    case 'startdate':
                        dispatch(getStartDate(res))
                        break
            
                    case 'city':
                        dispatch(getCity(res))
                        break
            
                    case 'street':
                        dispatch(getStreet(res))
                        dispatch(getStreetError(''))
                        break
            
                    case 'zipCode':
                        dispatch(getZipCode(res))
                        dispatch(getZipCodeError(''))
                        break
            
                    case 'select_state':
                        dispatch(getState(res))
                        break
            
                    case 'select_department':
                        dispatch(getDepartment(res))
                        break
            
                    default:
                    console.log("input doesn't exist");
                } 
                
                return res
            } 

            if(res === 'undefined') {
                switch(input){
                    case 'firstname':
                        dispatch(getFirstNameError('Firstname must contain only letters and no spaces'))
                        break
            
                    case 'lastname':
                        dispatch(getLastNameError('Lastname must contain only letters and no spaces'))
                        break

                    case 'city':
                        dispatch(getCityError('city must contain only letters '))
                        break
            
                    case 'street':
                        dispatch(getStreetError('street must contain only letters'))
                        break
            
                    case 'zipCode':
                        dispatch(getZipCodeError('Zipcode must contain only 5 numbers and no spaces'))
                        break

                    default:
                    console.log("input doesn't exist");
                } 
            }     
    }

 

    return(
        <form>
            <div className="first_row">
                {first_row.map((elt, index) => {
                    return <FormInput key={index} label={elt.label} id={elt.id} type={elt.type} onChange={(e) => valueInput(e.target.value, elt.id)}/>
                })
                
                }
            </div>

            <div className="second_row address_form">
                <h3>Adress</h3>
                {second_row.map((elt, index) => {
                    switch(elt.type) {
                        case 'text':
                            return <FormInput key={index} label={elt.label} id={elt.id} type={elt.type} onChange={(e) => valueInput(e.target.value, elt.id)}/>
                        
                        case 'list':
                            return <SelectOption key={index} title={elt.label}  name='name' label={elt.label} id={elt.id} list={statesTab} onChange={(e) => valueInput(e.target.value, elt.id)} />
                        
                        default:
                        console.log('input does not exist');
                    }
                    return elt
                    })
                
                }
            </div>

            <div className="third_row">
                <SelectOption name='name'  title={third_row.label}  label={third_row.label} id={third_row.id} list={departmentTab} onChange={(e) => valueInput(e.target.value, third_row.id)} />
            </div>
        </form>
    )
}

export default FormGroup