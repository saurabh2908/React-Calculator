import React from 'react';
const Input = (props) => {
    return (
        <div>
        First Number : <input onChange={props.ifirst} id="fnum" type="number"/>
        Second Number: <input onChange={props.isecond} id="snum" type="number"/>
        </div>
    );
}

export default Input;