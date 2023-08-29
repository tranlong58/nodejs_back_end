const express = require('express');
const HomeControllerAPI = require('../controllers/homeControllerAPI');
const router = express.Router();

//show all users
router.get('/show-user', HomeControllerAPI.showUser);

//create a user
router.post('/store-user', HomeControllerAPI.storeUser);

//edit a user
router.post('/update-user', HomeControllerAPI.updateUser);

//delete a user
router.post('/delete-user/:id', HomeControllerAPI.deleteUser);


module.exports = router;