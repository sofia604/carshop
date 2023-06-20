import React from 'react'
import AWS from 'aws-sdk';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addCustomer} from '../features/forms/formsSlice'

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken:  process.env.REACT_APP_AWS_SESSION_TOKEN
});


export const DynamoViewer = () => {

    const dynamo = new AWS.DynamoDB();
    var params = {
        TableName: 'services'
      };

      const [service, setservice] = useState([]);
      const [checkboxes, setCheckboxes] = useState([]);
      const currentDate = new Date();


      const navigate = useNavigate()
      const dispatch = useDispatch()
      
      const getDynamoElements = (e) => {
        dynamo.scan(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
            setservice(data.Items)
        }
      });
    }

    useEffect(() => {
        getDynamoElements();
    }, [])
    
    
    const handleCheckboxChange = (event) => {
      const { name,value} = event.target;
      setCheckboxes((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const selectedValues = Object.keys(checkboxes).filter((key) => checkboxes[key]);
      const selectedTime = Object.values(checkboxes).map((value) => parseInt(value))
      const totalTime = selectedTime.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      const dueDate = new Date(currentDate.getTime() + totalTime * 60000);
      const values = {
        services : selectedValues,
        worktime : totalTime,
        date : dueDate.toLocaleDateString(),
        time : dueDate.toLocaleTimeString()
      }
      dispatch(addCustomer(values));
      navigate('/preview')
    };
    
  return (
    <div className='dynamoContainer h-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        {(service.length===0) && (
            <h3>No services available</h3> 
            )
        }
        {(service.length>0) && (
            <div className="space-y-5 border-2 border-cian-500 p-6">
                <h1>Choose your services</h1>
                <p className='text-lg text-gray-500'>Select one or more of our services available for your car</p>
                <hr />
                {
                service.map((e, index) => (
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                            id="coment"
                            aria-describedby="comments-description"
                            name={e.name.S}
                            value = {e.time.N}
                            onChange={handleCheckboxChange}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                            {e.name.S}
                            </label>
                            <p id="comments-description" className="text-gray-500">
                            The estimated working time is {e.time.N} minutes.
                            </p>
                        </div>
                    </div>
                ))}
            <button id="Fbutton" type="submit" className="bg-teal-500 font-latoBold text-sm text-white py-2 mt-3 rounded-lg w-full">Next</button>
          </div>
            )
        }
      </form>
    </div>
    
  )
}