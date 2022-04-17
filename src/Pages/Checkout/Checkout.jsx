import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';



const Checkout = () => {
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [problem, setProblem] = useState('')
    const [user] = useAuthState(auth)
    const handleProblem = e => {
        setProblem(e.target.value)
    }

    const handlePhone = e => {
        setPhone(e.target.value)
    }
    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log()
    }
    return (
        <div className='form-container'>
            <div style={{ width: "450px" }} className="form mx-auto border-primary border p-4 rounded-3">
                <h3 className='heading text-center my-4'>Please Provide info to Checkout</h3>
                <Form className="mx-auto text-start" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleName} type="text" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={user && user.email} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onBlur={handlePhone} type="nomber" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onBlur={handleAddress} type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Problem</Form.Label>
                        <Form.Control onBlur={handleProblem} as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Check Out
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;