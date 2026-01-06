const express = require("express");
const { smartphoneCreate } = require("../Controller/smartphoneControl");


const router = express.Router();


router.route('/createphone').post(smartphoneCreate)


module.exports = router