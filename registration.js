const mysql = require("mysql");
const express = require("express");

const app= express();
app.use("/assets",express.static("assets"));

const connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "info"
});

//connect to the database
connection.connect(function(error){
    if(error) throw error
    else console.log("MySQL database is successfully connected!!")
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

//set app port
app.listen(4000);