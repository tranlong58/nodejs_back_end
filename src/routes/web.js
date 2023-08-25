const express = require('express');
const HomeController = require('../controllers/homeController');
const router = express.Router();

router.get('/', HomeController.showHomePage);
router.get('/abc', HomeController.getABC);

//show all users
router.get('/show-user', HomeController.showUser);

//create a user
router.get('/create-user', HomeController.createUser);
router.post('/store-user', HomeController.storeUser);

//edit a user
router.get('/edit-user/:id', HomeController.editUser);
router.post('/update-user', HomeController.updateUser);

//delete a user
router.post('/delete-user/:id', HomeController.deleteUser);


module.exports = router;