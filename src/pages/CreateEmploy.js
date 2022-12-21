import React from "react";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetErrorForm } from "../features/errorSlice";
import { resetInputs } from "../features/inputSlice";

function CreateEmployee() {
    const dispatch = useDispatch()
    function handleStatus() {
        dispatch(resetInputs())
        dispatch(resetErrorForm())
    }
    return <div className="container createemployee">
        <h2>Create Employee</h2>
        <FormContainer/>
        <Link to={'/employeelist'} onClick={() => handleStatus()}>View Current Employees</Link>
    </div>
}

export default CreateEmployee