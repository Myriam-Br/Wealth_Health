import React from "react";
import FormContainer from "../components/FormContainer";
import { useDispatch } from "react-redux";
import { resetErrorForm } from "../features/errorSlice";
import { resetInputs } from "../features/inputSlice";
import HandleLink from "../components/HandleLink";

function CreateEmployee() {
    const dispatch = useDispatch()
    function handleStatus() {
        dispatch(resetInputs())
        dispatch(resetErrorForm())
    }
    return <div className="container createemployee">
        <h2>Create Employee</h2>
        <FormContainer/>
        <HandleLink to = {'/employeelist'} onClick={() => handleStatus()} text={'View Current Employees'}/>
    </div>
}

export default CreateEmployee