const express = require("express");
const connection = require("./MDB/config");
const router = require("./Route/userRoute");

const app = express()
connection();

// ✅ ADD THESE TWO LINES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',router);

const PORT = 5005
app.listen(PORT,console.log(`server is ok ${PORT}`));