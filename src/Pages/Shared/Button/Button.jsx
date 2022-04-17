import React from 'react';
import "./Button.css"

const Button = (props) => {
    return (
        <div className='btn-box'>
            <button className='btn-primary'>{props.text}</button>
        </div>
    );
};

export default Button;