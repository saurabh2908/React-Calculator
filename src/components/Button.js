import React from 'react'
const Button = (props) => {
    return (
        <button onClick={props.onClick} >{props.but}</button>
    );
}

export default Button;