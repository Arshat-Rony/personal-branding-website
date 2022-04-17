import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import auth from '../../../firebse.init';
import img from "../../../images/others/google.png"
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import './SignUp.css'
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';

import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathnme || '/'
    const [displayname, setDisplayName] = useState('')
    const [createUserWithEmailAndPassword, emailError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleError] = useSignInWithGoogle(auth, { sendEmailVerification: true });
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );
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
    const handleName = e => {
        setDisplayName(e.target.value)
    }
    const handleGoogle = async (e) => {
        e.preventDefault()
        await signInWithGoogle()
            .then(res => {
                navigate(from, { replace: true });
            })
        await sendEmailVerification()
    }
    const handleSubmit = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, pass)
            .then(res => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='form-container'>
            <div style={{ width: "450px" }} className="form mx-auto border-primary border p-4 rounded-3">
                <h3 className='heading text-center'>Please Sign Up</h3>
                <Form className="mx-auto text-start" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleName} type="text" required />
                    </Form.Group>

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
                        Sign up
                    </Button>
                    <p className='mt-1'>ALready have an account ?
                        <Link className='text-decoration-none' to='/login'> Login</Link>
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

export default SignUp;