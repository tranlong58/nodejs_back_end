const express = require('express');
const { getHomePage, getABC, createUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/abc', getABC);

router.post('/create-user', createUser);

module.exports = router;