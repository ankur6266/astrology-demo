import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { jsonData } from '../data';

function InputForm() {
    const [value, setValue] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z]/g, ''); 

        if (inputValue !== filteredValue) {
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 2000);
            setValue(filteredValue);
        } else {
            setValue(inputValue); 
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        // alert(value)
    }

    return (
        <>
        <Form className='fomrName' onSubmit={onFormSubmit}>
            <Form.Label htmlFor="inputName">Enter Your Name</Form.Label>
            <Form.Control
                type="text"
                id="inputName"
                aria-describedby="nameBlock"
                placeholder='Enter Name'
                value={value}
                onChange={handleInputChange}
            />
            <Form.Text id="nameBlock" muted>
                Enter your name to get the results....Enter only alphabets
            </Form.Text>
            {showWarning && <p style={{ color: 'red' }}>Only alphabetic characters allowed. Non-alphabetic characters removed.</p>}
            <Col>
            <button className='btn btn-primary'>Submit</button>
            </Col>
        </Form>
        </>
    );
}

export default InputForm;
