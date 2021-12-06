// Button Component with props for click event, style, and button 

import React from "react";

const Button = (props) => {
    return (
        <button onClick={props.clickEvent} style={props.style}>{props.content}</button>
    );
}

export default Button;