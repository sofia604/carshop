import React from 'react'
import { useState } from 'react';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addCustomer} from '../features/forms/formsSlice'


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    sessionToken:  process.env.AWS_SESSION_TOKEN 
});

export const Form = () => {
    const dynamo = new AWS.DynamoDB();
    const [values,setValues]= useState({
        name:"",
        email:"",
        phone:"",
        identification:"",
    });
    const dispatch = useDispatch()

    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate()
    var params = {
        TableName: 'clients',
        Item: {
            "name": {S:values.name},
            "email": {S:values.email},
            "phone": {N:values.phone},
            "identification": {N:values.identification},
            "selectedOption": {S:selectedOption}
        }
    };
    
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const handleInput = (event) => {
        const {name,value} = event.target;
        setValues({
            ...values,
            [name]:value,
        })
    };

    const handleForm =  (event) => {
        event.preventDefault();
        dynamo.putItem(params, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else {
                console.log(data);
            }
        });
        dispatch(addCustomer(values)) 
        navigate('/vehicle')
    };

    return (
        <div className='h-screen flex items-center justify-center'>
            <form className='border-2 border-cian-500 bg-white flex rounded-lg  font-latoRegural w-2/3' onSubmit={handleForm}>
                <div className='flex-1 text-gray-700 p-20'>
                    <h1>Let's get started!</h1>
                    <p className='text-lg text-gray-500'>Enter your personal data to agend the apointment</p>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className="block font-latoBold text-sm pb-1 " htmlFor='name'>Name:</label>
                            <input
                                className='border-2 border-gray-500 p-1 rounded-ms w-1/2 focus:border-teal-500 focus:ring-teal-500'
                                type="text"
                                value={values.name}
                                name="name"
                                placeholder='Enter your name'
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className="block font-latoBold text-sm pb-1 " htmlFor='email'>Email</label>
                            <input
                                className='border-2 border-gray-500 p-1 rounded-ms w-1/2 focus:border-teal-500 focus:ring-teal-500'
                                type="email"
                                name="email"
                                value={values.email}
                                placeholder='Enter your address'
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className="block font-latoBold text-sm pb-1" htmlFor='phone'>Phone Number</label>
                            <input
                                className='border-2 border-gray-500 p-1 rounded-ms w-1/2 focus:border-teal-500 focus:ring-teal-500'
                                type="text"
                                name = "phone"
                                value={values.phone}
                                placeholder='Enter your Phone Number'
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className='mt-6' >
                        <p className='text-lg text-gray-500 w-1/2'>Select your type of identification</p>
                        <div className='pb-4  border-2 w-1/2'>
                            <label className="font-latoBold text-sm p-2"> 
                                <input 
                                    className='border-2 border-gray-500 p-2 '
                                    type="radio"
                                    name="options"
                                    value="C.I"
                                    checked={selectedOption === "C.I"}
                                    onChange={handleOptionChange}
                                />Identification Card
                            </label>
                            <label className="font-latoBold text-sm p-2"> 
                                <input 
                                    className='border-2 border-gray-500 p-2  '
                                    type="radio"
                                    name="options"
                                    value="RUC"
                                    checked={selectedOption === "RUC"}
                                    onChange={handleOptionChange}
                                />RUC
                            </label>
                            <label className="font-latoBold text-sm p-2"> 
                                <input 
                                    className='border-2 border-gray-500 p-2 gap-2 '
                                    type="radio"
                                    name="options"
                                    value="Passaport"
                                    checked={selectedOption === "Passaport"}
                                    onChange={handleOptionChange}
                                />Passaport
                            </label>
                            <div className='pb-4' style={{padding:"10px"}}>
                                <label className="block font-latoBold text-sm pb-1 " htmlFor='identification'>Identification Number</label>
                                <input
                                    className='border-2 border-gray-500 p-2 rounded-ms w-100 focus:border-teal-500 focus:ring-teal-500'
                                    type="text"
                                    name="identification"
                                    value={values.identification}
                                    placeholder='Enter your Identification Number'
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                        <button id="Fbutton" type="submit" className="bg-teal-500 font-latoBold text-sm text-white py-2 mt-3 rounded-lg w-full">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
};