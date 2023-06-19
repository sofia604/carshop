import React from 'react'
import { useState } from 'react';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addCustomer} from '../features/forms/formsSlice'

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1',
    sessionToken: ''
});


export const CarForm = () => {
    const dynamo = new AWS.DynamoDB();
    const [values,setValues]= useState({
        marca:"",
        modelo:"",
        placa:"",
        tankLevel:"",
        info:""

    });

    const navigate = useNavigate()
    const dispatch = useDispatch()
    var params = {
        TableName: 'cars',
        Item: {
            "marca": {S:values.marca},
            "modelo": {S:values.modelo},
            "plate": {S:values.placa},
            "tankLevel": {S:values.tankLevel},
            "info": {S:values.info}
        }
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

        dispatch(addCustomer(values));
        navigate('/services');
    };

    return (
        <div className='h-screen flex items-center justify-center'>
            <form className='border-2 border-cian-500 bg-white flex rounded-lg  font-latoRegural w-2/3' onSubmit={handleForm}>
                <div className='flex-1 text-gray-700 p-20'>
                    <h1>Now it's your vehicle's turn</h1>
                    <p className='text-lg text-gray-500'>Enter your vehicle data to know it better</p>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className="block font-latoBold text-sm pb-1 " htmlFor='marca'>Brand</label>
                            <input
                                className='border-2 border-gray-500 p-1 rounded-ms w-1/2 focus:border-teal-500 focus:ring-teal-500'
                                type="text"
                                value={values.marca}
                                name="marca"
                                placeholder='Enter your vehicle brand'
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className="block font-latoBold text-sm pb-1 " htmlFor='modelo'>Model</label>
                            <input
                                className='border-2 border-gray-500 p-1 rounded-ms w-1/2 focus:border-teal-500 focus:ring-teal-500'
                                type="text"
                                name="modelo"
                                value={values.modelo}
                                placeholder='Enter your vehicle model'
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className="block font-latoBold text-sm pb-1" htmlFor='placa'>Plate</label>
                            <input
                                className='border-2 border-gray-500 p-1 rounded-ms w-1/2 focus:border-teal-500 focus:ring-teal-500'
                                type="text"
                                name = "placa"
                                value={values.placa}
                                placeholder='Enter your vehicle plate'
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className="block font-latoBold text-sm pb-1" htmlFor='tankLevel'>Fuel tank level</label>
                            <input
                                className='border-2 border-gray-500 p-1 rounded-ms w-1/2 focus:border-teal-500 focus:ring-teal-500'
                                type="text"
                                name = "tankLevel"
                                value={values.tankLevel}
                                placeholder='Enter your vehicle tankLevel'
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4'>
                            <label className="block font-latoBold text-sm pb-1" htmlFor='info'>Relevant information</label>
                            <textarea
                                className='border-2 border-gray-500 p-1 rounded-ms w-1/2 focus:border-teal-500 focus:ring-teal-500'
                                name = "info"
                                value={values.info}
                                placeholder='Enter your Relevant information'
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <button id="Fbutton" type="submit" className="bg-teal-500 font-latoBold text-sm text-white py-2 mt-3 rounded-lg w-full">Next</button>
                </div>
            </form>
        </div>
    )
};