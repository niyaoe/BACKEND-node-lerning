const express = require("express");
const connection = require("./MDB/config");
const router = require("./Route/userRoute");

const app = express()
connection();

app.use(express.json())


app.use('/auth',router);

const PORT = 5005
app.listen(PORT,console.log(`server is ok ${PORT}`));