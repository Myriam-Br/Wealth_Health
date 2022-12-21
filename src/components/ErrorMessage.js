import React from "react";
import {  useSelector } from "react-redux";
import PropTypes from 'prop-types';

function ErrorMessage({id}) {

   //handle error inputs
   const {firstNameError} = useSelector(state => state.error)
   const {lastNameError} = useSelector(state => state.error)
   const {zipCodeError} = useSelector(state => state.error)
   const {streetError} = useSelector(state => state.error)
   const {cityError} = useSelector(state => state.error)

   switch(id){
        case 'firstname':
            return <div>{firstNameError}</div>
        case 'lastname':
            return <div>{lastNameError}</div>
        case 'zipCode':
            return <div>{zipCodeError}</div>
        case 'street':
            return <div>{streetError}</div>
        case 'city':
            return <div>{cityError}</div>
        default:
            console.log("input doesn't exist");
   }

}

ErrorMessage.protoType = {
    id : PropTypes.string,
}

export default ErrorMessage