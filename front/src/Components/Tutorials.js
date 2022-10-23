import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default function Tutorials() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);




  const getAll = async () => {
    try{
      const {data} = await axios.get("http://localhost:1234/api/tutorials")
      console.log(data)
      setTutorials(data)
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




  const removeAllTutorials = async() => {
    try{
      const {data} = await axios.delete("http://localhost:1234/api/tutorials")
      console.log(data)
      setTutorials(data)
      setLoading(false);

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

  };

  const handleSub = (e) => {
    e.preventDefault()
    removeAllTutorials()
  }

  useEffect(() => {
    getAll()
  },[])


  
  return (
    
    <div>

      {tutorials.map(tut => (
        <h2>{tut.name}</h2>
      )) }
      
      <form onSubmit={(e) => handleSub(e)}>
        <button type='submit'>Delete All</button>
      </form>
    </div>
  )
}
