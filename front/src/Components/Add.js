import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Add() {


  const [tutorial, setTutorial] = useState({
    name: "",
    description: "",
    published: false
  });
  const [submitted, setSubmitted] = useState(false);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };


  const saveTutorial = async () => {
    try{
      const {data} = await axios.post("http://localhost:1234/api/tutorials",tutorial)
      console.log(data)
      setSubmitted(true);

    }

    catch(error){
      if (error.response) { // get response with a status code not in range 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) { // no response
        console.log(error.request);
      } else { // Something wrong in setting up the request
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  }



  const newTutorial = () => {
    setTutorial({});
    setSubmitted(false);

  };




  return (
    <div className="submit-form" id='container1'>
      {submitted ? (
        <div id='form-group'>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div id='form-group'>
          <div className="form-group" >
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
 
