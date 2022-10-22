import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Tutorials() {
  const [tuts,setTuts] = useState([])
  const getAll = async () => {
    try{
      const {data} = await axios.get("http://localhost:1234/api/tutorials")
      console.log(data)
      setTuts(data)
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
  useEffect(() => {
    getAll()
  },[])

  return (
    <div>
      {tuts.map(tut => (
        <h2>{tut.name}</h2>
      ))}
    </div>
  )
}
