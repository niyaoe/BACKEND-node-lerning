const mongoose = require("mongoose")
const url = "mongodb+srv://niyaoe:dTdkqTukl3Uc993r@cluster0.fqqqva5.mongodb.net/?appName=Cluster0";

const connection = async ()  =>{
    try {
        const connect = await mongoose.connect(url)
        console.log("MDB connected successFully");
    
    } catch (error) {
            console.log("the error : ", error);
            process.exit()
    }
}
module.exports = connection;