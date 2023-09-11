const express = require('express');
const HomeControllerAPI = require('../controllers/homeControllerAPI');
const router = express.Router();

//user
//get user by id
router.get('/show-user/:id', HomeControllerAPI.showUserByID);

//get all users or user by page
router.get('/show-user', HomeControllerAPI.showUser);

//create a user
router.post('/store-user', HomeControllerAPI.storeUser);

//update a user
router.post('/update-user', HomeControllerAPI.updateUser);

//delete a user
router.post('/delete-user', HomeControllerAPI.deleteUser);

//count user
router.get('/count-user', HomeControllerAPI.countUser);


//customer
//create a customer
router.post('/create-customer', HomeControllerAPI.createCustomer);

//read customer all or by page
router.get('/read-customer', HomeControllerAPI.readCustomer);

//update customer
router.put('/update-customer', HomeControllerAPI.updateCustomer);

//count customer
router.get('/count-customer', HomeControllerAPI.countCustomer);



module.exports = router;