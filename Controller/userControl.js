const userModel = require("../Models/user")



const userCreate = async (req,res) => {

    console.log("before DS",req.body);
    const {Name,Age,Email,Password} = req.body;
    console.log("after DS",req.body);
    

    try {
        const userDetails = await userModel.create({
            Name,Age,Email,Password
        })

        res.json({ status : true, data: userDetails })
    } catch (error) {
        res.json({ status: false, error: {} })
        return res.status(500).json("issue warranted")
    }


}


module.exports = userCreate;