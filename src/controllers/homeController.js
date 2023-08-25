const connection = require('../config/database');
const CRUDServices = require('../services/CRUDServices');

class HomeController {
    //GET /
    showHomePage(req, res) {
        return res.render('home.ejs');
    }

    //GET /abc
    getABC(req, res) {
        res.render('sample.ejs');
    }

    //GET /show-user
    async showUser(req, res) {
        const results = await CRUDServices.getAllUsers();

        res.render('showUser.ejs', { pageName: 'showUser', listUsers: results });
    }

    //GET /create-user
    createUser(req, res) {
        res.render('createUser.ejs', { pageName: 'createUser' });
    }

    //POST /store-user
    async storeUser(req, res) {
        const email = req.body.email;
        const name = req.body.name;
        const city = req.body.city;

        await CRUDServices.createNewUser(email, name, city);

        res.redirect('/show-user');
    }

    //GET /edit-user/:id
    async editUser(req, res) {
        const user = await CRUDServices.getUserByID(req.params.id);

        res.render('editUser.ejs', { pageName: '', user: user });
    }

    //POST /update-user
    async updateUser(req, res) {
        const email = req.body.email;
        const name = req.body.name;
        const city = req.body.city;
        const id = req.body.id;

        await CRUDServices.updateUserByID(id, email, name, city);

        res.redirect('/show-user');
    }

    //POST /delete-user/:id
    async deleteUser(req, res) {
        const id = req.params.id;

        await CRUDServices.deleteUserByID(id);

        res.redirect('/show-user');
    }
}

module.exports = new HomeController