const express = require("express");
const connection = require("./MDB/config");

const app = express()
connection();




app.listen(5000,console.log("server is ok"));