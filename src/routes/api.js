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

//read all customer or by page
router.get('/read-customer', HomeControllerAPI.readCustomer);

//update customer
router.put('/update-customer', HomeControllerAPI.updateCustomer);

//delete customer
router.delete('/delete-customer', HomeControllerAPI.deleteCustomer);

//count customer
router.get('/count-customer', HomeControllerAPI.countCustomer);


//category
//create a category
router.post('/create-category', HomeControllerAPI.createCategory);

//read all category or by page
router.get('/read-category', HomeControllerAPI.readCategory);

//update category
router.put('/update-category', HomeControllerAPI.updateCategory);

//delete category
router.delete('/delete-category', HomeControllerAPI.deleteCategory);

//count category
router.get('/count-category', HomeControllerAPI.countCategory);


//transaction
//create a transaction
router.post('/create-transaction', HomeControllerAPI.createTransaction);

//read all transaction or by month
router.get('/read-transaction', HomeControllerAPI.readTransaction);

//update transaction
router.put('/update-transaction', HomeControllerAPI.updateTransaction);

//delete transaction
router.delete('/delete-transaction', HomeControllerAPI.deleteTransaction);

module.exports = router;