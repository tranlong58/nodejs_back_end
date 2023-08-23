const connection = require('../config/database');
const { getAllUsers, createNewUser } = require('../services/CRUDServices');

//GET /
const showHomePage = (req, res) => {
    return res.render('home.ejs');
}

//GET /abc
const getABC = (req, res) => {
    res.render('sample.ejs');
}

//GET /show-user
const showUser = async (req, res) => {
    const results = await getAllUsers();

    res.render('showUser.ejs', { listUsers: results });
}

//GET /create-user
const createUser = (req, res) => {
    return res.render('createUser.ejs');
}

//POST /store-user
const storeUser = async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;

    // const [results, fields] = await connection.query(
    //     'insert into Users(email, name, city) values(?, ?, ?)',
    //     [email, name, city]
    // );

    await createNewUser(email, name, city);

    res.redirect('/');
}

module.exports = {
    showHomePage, getABC, showUser, createUser, storeUser
}