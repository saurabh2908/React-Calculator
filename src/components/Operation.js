import React from 'react';
import Button from './Button';
const Operation = (props) => {
    return (
        <div>
        <Button onClick={props.add1} but='+'/>
        <Button onClick={props.sub} but='-'/>
        <Button onClick={props.mul} but='*'/>
        <Button onClick={props.div} but='/'/>
        </div>
    );
}

export default Operation;