import React from 'react';
import img from "../../../src/images/about/IMG_1564-removebg-preview (1) (1).png"
import './About.css'
const About = () => {
    return (
        <div className='about-container container d-flex justify-content-between align-items-center flex-column flex-md-row'>
            <div className='image order-1 order-md-2 text-end'>
                <img className='' src={img} alt="" />
            </div>
            <div className="goals mt-5 mt-md-0 order-2 order-md-1 text-md-start">
                <h1 className='heading'>Aim to Be a Programmer</h1>
                <p>A software engineers or systems programmers, computer programmers are tasked with designing and creating software programs, integrating systems and software, training end-users, analyzing algorithms, modifying source-code, writing system instructions, debugging, and maintaining operating systems.</p>
            </div>
        </div>
    );
};

export default About;