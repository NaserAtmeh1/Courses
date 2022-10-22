const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.Port
const cors = require("cors")
const tutRoute = require("./routes/tutRoute")

var corsOptions = {
    origin: "http://localhost:1234"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));



  app.use("/api/tutorials", tutRoute);


app.listen(PORT,() => {
    console.log("Server is running on port " + PORT)
})