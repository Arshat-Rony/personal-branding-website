import React from 'react';
import './NotFound.css'
import img from '../../../src/images/others/404_illustration_4x (1).webp'
const NotFound = () => {
    return (
        <div className='unknownpage'>
            <img className='w-100' src={img} alt="" />
        </div>
    );
};

export default NotFound;