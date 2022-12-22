import React from "react";
import { Link } from "react-router-dom";

function HandleLink({to, onClick, text}) {
    return (<Link to={to} onClick={onClick}>{text}</Link>)
}

export default HandleLink