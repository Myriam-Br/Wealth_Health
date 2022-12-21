import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortedArray, getArray} from "../features/listSlice";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { getResults } from "../features/numberResultSlice";
import PropTypes from 'prop-types';
import ButtonComponent from "./ButtonComponent";

function ButtonSort({title, section}) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArray())
    }, [dispatch])

    const {employeeList} = useSelector(state => state.list)
    const {array} = useSelector(state => state.numberResult)
    const {range} = useSelector(state => state.numberResult)
    let employees = ''

    //if range not null get filtered array else get array with all results
    if(range !== null) {
        employees = [...array]
    }else{
        employees = [...employeeList]
    }

    function handleDispatch() {
        if(range !== null) {
            dispatch(getResults(employees))
        }else{
            dispatch(sortedArray(employees))
        }
    }

    function reverseSortEmployee(){
        employees.sort((a, b) => {
            switch(section) {
                case 'first-name':
                return -1 * a.firstName.localeCompare(b.firstName)

                case 'last-name':
                return -1 * a.lastName.localeCompare(b.lastName)

                case 'start-date':
                return -1 * a.startDate.localeCompare(b.startDate)

                case 'department':
                return -1 * a.department.localeCompare(b.department)

                case 'street':
                return -1 * a.street.localeCompare(b.street)

                case 'city':
                return -1 * a.city.localeCompare(b.city)

                case 'state':
                return -1 * a.state.localeCompare(b.state)

                case 'zip-code':
                return -1 * a.zipCode.localeCompare(b.zipCode)

                default:
                console.log('section does not exist');
            }      
            
            return section
        })

        //if range selected -> organize results filtered only else organize all results
        handleDispatch()
    }

    function sortEmployee(){
        employees.sort((a, b) => {
            switch(section) {
                case 'first-name':
                return a.firstName.localeCompare(b.firstName)

                case 'last-name':
                return a.lastName.localeCompare(b.lastName)

                case 'start-date':
                return  a.startDate.localeCompare(b.startDate)

                case 'department':
                return  a.department.localeCompare(b.department)

                case 'street':
                return a.street.localeCompare(b.street)

                case 'city':
                return  a.city.localeCompare(b.city)

                case 'state':
                return a.state.localeCompare(b.state)

                case 'zip-code':
                return a.zipCode.localeCompare(b.zipCode)

                default:
                console.log('section does not exist');
            }
            return section
        })

        //if range selected -> organize results filtered only else organize all results
        handleDispatch()
       
    }
    
    return (
        <div className="category_table">
            <p>{title}</p>
            <div className="buttons_sort">
                <ButtonComponent onClick = {() => sortEmployee()} label = "from A to Z" icon={<FiChevronUp/>}/>
                <ButtonComponent onClick = {() => reverseSortEmployee()} label = "from Z to A" icon={<FiChevronDown/>}/>
            </div> 
        </div>
    )
}

ButtonSort.protoType = {
    title : PropTypes.string,
    section : PropTypes.string
}
export default ButtonSort