import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center ailign-items-start flex-column'>
            <div className="banner-text text-start container">
                <h1 className='heading text-primary'>Emily Jhonson</h1>
                <p>Your favourite doctor Is Here</p>
                <h3 >Modern Dentistry in calm and relaxed Here</h3>
                <Link to="/checkout">
                    <Button text={"Make Appointment"}></Button>
                </Link>

            </div>
        </div>
    );
};

export default Banner;