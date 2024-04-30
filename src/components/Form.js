import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { jsonData } from '../data';

function InputForm({setNameData, setNumberData}) {
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
        let letters = value.split('');
        letters = letters.map(str => str.toUpperCase());
        // alert(letters)
        // console.log(jsonData);

        let resultNumb = letters.map(letter => {
                const foundKey = Object.keys(jsonData).filter(key => jsonData[key].some(obj => obj.value === letter));
                return foundKey.length ? parseInt(foundKey[0]) : null;
              });
            
        // setNumber(resultNumb);
        setNameData(value);
        setNumberData(resultNumb)
        

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
<<<<<<< HEAD
            <Col className='text-center mt-2 mb-2'>
=======
            <Col className='m-3'>
>>>>>>> 3c62f7999394704c4f77d21349c78c31337f8b9b
            <button className='btn btn-primary'>Submit</button>
            </Col>
        </Form>
        </>
    );
}

export default InputForm;
