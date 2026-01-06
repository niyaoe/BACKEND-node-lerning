const express = require("express");
const connection = require("./MDB/config");
const authRouter = require("./Route/userRoute");
const smartphoneRouter = require("./Route/smartphoneRoute")



const app = express()
connection();

app.use(express.json())

app.use('/auth',authRouter);
app.use('/smartphones',smartphoneRouter)



const PORT = 5005
app.listen(PORT,console.log(`server is ok ${PORT}`));