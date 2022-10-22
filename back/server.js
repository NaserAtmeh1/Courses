const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.Port
const cors = require("cors")

var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));


app.listen(PORT,() => {
    console.log("Server is running on port " + PORT)
})