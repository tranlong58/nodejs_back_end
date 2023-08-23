const express = require('express');
const { showHomePage, getABC, showUser, createUser, storeUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', showHomePage);
router.get('/abc', getABC);

router.get('/show-user', showUser);
router.get('/create-user', createUser);
router.post('/store-user', storeUser);

module.exports = router;