const connection = require('../config/database');

const getHomePage = (req, res) => {

    return res.render('home.ejs');
}

const getABC = (req, res) => {
    res.render('sample.ejs');
}

const createUser = (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const city = req.body.city;

    connection.query(
        `insert into Users(email, name, city)
        values(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Created new user !');
        }
    )
}

module.exports = {
    getHomePage, getABC, createUser
}