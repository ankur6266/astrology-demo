import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { soulData, destinyData } from '../descriptions';
import { jsonData } from '../data';

export default function Result(props) {
    const total = props.total;

    const inputName = props.name.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];


let destinyNums = total;
const masterNumbers = [11, 22, 33];
destinyNums = masterNumbers.includes(destinyNums)?destinyNums:Array.from(String(destinyNums), Number).reduce((sum, digit) => sum + digit, 0);
while(destinyNums>9 && !masterNumbers.includes(destinyNums)){
    destinyNums = Array.from(String(destinyNums), Number).reduce((sum, value) => sum + value, 0)
}


let soulLetter = inputName.split('').filter(char => vowels.includes(char.toLowerCase()));
soulLetter = soulLetter.map(str => str.toUpperCase());
let soulNums = soulLetter.map(letter => {
    const foundKey = Object.keys(jsonData).filter(key => jsonData[key].some(obj => obj.value === letter));
    return foundKey.length ? parseInt(foundKey[0]) : null;
  });

  const soulUrgeNum = soulNums.reduce((a, b) => a + b, 0);


    return (
        <>
            <Card className='mt-4 p-2'>
                <Row>
                    <Col lg={12} className='destiny-column'>
                        <p><b>Destiny Number</b>: The Expression number, which describes who you are, and what you are, or what you become.</p>
                        <p><b>Name Destiny/Expression Number or Namanak: </b>{destinyNums}</p>

                        {destinyData.hasOwnProperty(destinyNums) && (
                            <p>
                              {destinyData[destinyNums]}  
                            </p>
                        )}  

                    </Col>
                    <Col lg={12} className='soul-urge-column'>
                        <p><b>Soul Urge Number</b>: The Heart Desire number, which describes your inner potentials and inner resources. </p>
                        <p><b>Soul Urge/Heart Desire Number: </b>{soulUrgeNum }</p>

                        {soulData.hasOwnProperty(destinyNums) && (
                            <p>
                              {soulData[soulUrgeNum]}  
                            </p>
                        )}  
                    </Col>
                </Row>
            </Card>
        </>
    );
}
