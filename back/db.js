const mysql = require("mysql")

 const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: process.env.DB_KEY,
    database:"courses"
  })


  db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
  module.exports = db