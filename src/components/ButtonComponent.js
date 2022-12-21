import React from "react";
import PropTypes from 'prop-types';

function ButtonComponent({onClick, label, icon}) {
    return (
        <button aria-label={label} onClick={onClick}>{icon}</button>
    )
}

ButtonComponent.protoType = {
    onclick : PropTypes.func,
    label : PropTypes.string,
    icon : PropTypes.object,
}
export default ButtonComponent