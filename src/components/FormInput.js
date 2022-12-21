import React from "react";
import ErrorMessage from "./ErrorMessage";
import PropTypes from 'prop-types';

function FormInput({label, id, type, onChange}) {
    return (
        <div className="form_input">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} onChange={onChange}/>
            <ErrorMessage id={id}/>
        </div>
    )
}

FormInput.protoType = {
    label : PropTypes.string,
    id : PropTypes.string,
    type : PropTypes.string,
    onChange : PropTypes.func,
}

export default FormInput