const express = require('express')
const {userCreate,getUser, deleteUser} = require('../Controller/userControl') 

const router = express.Router()

router.route('/register').post(userCreate)
router.route('/users').get(getUser)
router.route('/users/:id').delete(deleteUser)


module.exports = router