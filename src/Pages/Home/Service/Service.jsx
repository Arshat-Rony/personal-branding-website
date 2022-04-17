import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';
import "./Service.css"
const Service = (props) => {
    const { desc, price, picture, name } = props.service;
    return (
        <div className='service p-4 '>
            <img style={{ width: "150px" }} src={picture} alt="" />
            <h4 className='mt-4 mb-3' >{name}</h4>
            <p style={{ fontFamily: "normal" }}>{desc}</p>
            <p style={{ fontFamily: "normal" }}> <strong>Price :</strong> {price}</p>
            <Link to='/checkout'>
                <button className="btn btn-outline-primary service-btn">Make Appointment</button>
            </Link>
        </div>
    );
};

export default Service;