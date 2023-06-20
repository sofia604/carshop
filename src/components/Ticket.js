import React from 'react'
import AWS from 'aws-sdk';
import {useSelector} from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal'

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken:  process.env.REACT_APP_AWS_SESSION_TOKEN
});

export const Ticket = () => {
    const forms = useSelector(state => state.forms)
    const [ventana, setVentana] = useState(false)
    const navigate = useNavigate()
    const values = {
        customerName : forms[1].name,
        email : forms[1].email,
        marca : forms[2].marca,
        modelo : forms[2].modelo,
        worktime : forms[3].worktime,
        dueTime : forms[3].time,
        dueDate : forms[3].date,
        services: forms[3].services
    }

    const dynamo = new AWS.DynamoDB();
    var params = {
        TableName: 'ticket',
        Item: {
            "name": {S:values.customerName},
            "email": {S:values.email},
            "marca": {S:values.marca},
            "modelo": {S:values.modelo},
            "worktime": {S:values.worktime},
            "dueDate": {S:values.dueDate},
            "dueTime": {S:values.dueTime},
            "services":{S:values.services}
        }
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
        navigate('/')
    };
return (
    <div className='h-screen flex items-center justify-center mb-6'>
        <Modal open={ventana} setOpen={setVentana} ></Modal>
        <form className='border-2' onSubmit={handleForm}>
            <div className="px-4 py-6 sm:px-6">
                <h1>Preview Ticket</h1>
            </div>
            {(forms.length===1) && (
                <div className="px-4 py-6 sm:px-6">
                    <p>No info available</p>
                </div>
            )}
        {(forms.length>1) && (
            <div className="border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">Customer name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{forms[1].name}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">Vehicle information</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{forms[2].marca} - {forms[2].modelo}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">Email address</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{forms[1].email}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">Working time</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{forms[3].worktime}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">Delivery date and time</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{forms[3].date} - {forms[3].time}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-900">Services</dt>
                    <ul className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {forms[3].services.map((e) => (
                        <li>{e}</li>
                    ))}
                    </ul>
                </div>
                </dl>
            </div>
            )}
            <div class="flex justify-center items-center mb-3">
                <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={()=>setVentana(!ventana)}>
                    Submit Order
                </button>
            </div>
        </form>
    </div>
  )
}