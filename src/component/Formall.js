import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { Form,Button } from 'react-bootstrap';
import Formdata  from './Formdata';
import validation from './Validationform';

const Formall = () => {

const  {handleChange,handelClick, data,errors } = Formdata(validation);

    console.log("errors",errors);

    return (
        <div className='form-all-page'>
            <h1 className='mb-4'>Form Checkpoints</h1>
             <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(event) => handleChange(event)} value={data.email} type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    
                </Form.Group>
                {errors.email && <p>{errors.email}</p>}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(event) => handleChange(event)} type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={(event)=>handelClick(event)} variant="primary" type="submit">
                    Submit
                </Button>

                </Form>
        </div>
    );
};

export default Formall;
