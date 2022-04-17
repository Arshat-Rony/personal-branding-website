import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from "../../../images/others/google.png"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [signInWithGoogle, googleError] = useSignInWithGoogle(auth, { sendEmailVerification: true });
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );
    const [signInWithEmailAndPassword, emailError,] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    if (googleError) {
        errorElement = googleError.message
    } else if (emailError) {
        errorElement = emailError.message;
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
    }
    const handleGoogle = async (e) => {
        e.preventDefault()
        await signInWithGoogle()
            .then(res => {
                console.log("user created")
            })
        await sendEmailVerification()
    }
    return (
        <div className='form-container'>
            <div style={{ width: "450px" }} className="form mx-auto border-primary border p-4 rounded-3">
                <h3 className='heading text-center'>Please Sign In</h3>
                <Form className="mx-auto text-start" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePass} type="password" required />
                    </Form.Group>

                    <div>
                        <p>{errorElement}</p>
                    </div>


                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                    <p className='mt-1'>New for Booking?
                        <Link className='text-decoration-none' to='/signup'>Sign up</Link>
                    </p>
                </Form>
                <div className='d-flex justify-content-between align-items-center gap-4 mt-4'>
                    <div className='or bg-secondary'></div>
                    or
                    <div className='or bg-secondary'></div>
                </div>
                <div onClick={handleGoogle} className='google d-flex justify-content-center align-items-center gap-4 border border-primary mt-4 rounded-3 py-2'>
                    <img style={{ width: "40px" }} src={img} alt="" />
                    Continue with Google
                </div>
            </div>
        </div>
    );
};

export default Login;