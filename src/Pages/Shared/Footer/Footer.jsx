import React from 'react';
import "./Footer.css"
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"
const Footer = () => {
    return (
        <footer className='footer-container text-white'>
            <div className="footer py-5 container d-flex justify-content-between align-items-center flex-column flex-md-row">
                <div>
                    <h3 className='heading'>Emily Jhonson</h3>
                    <p>Contact - +88093598</p>
                </div>
                <div className="menu mt-4 mt-md-0 d-flex flex-column">
                    <small className='mt-3'>About</small>
                    <small className='mt-3'>Blogs</small>
                    <small className='mt-3'>Services</small>
                    <small className='mt-3'>Contact</small>
                </div>
                <div className="socails mt-4 mt-md-0 d-flex flex-column ">
                    <small className='mt-3'><AiFillFacebook /></small>
                    <small className='mt-3'><AiFillLinkedin /></small>
                    <small className='mt-3'><AiFillInstagram /></small>
                    <small className='mt-3'><AiOutlineWhatsApp /></small>
                </div>
            </div>
            <small>{'\u00a9'} Copyright restricted by EJ</small>
        </footer>
    );
};

export default Footer;