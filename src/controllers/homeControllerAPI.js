const connection = require('../config/database');
const CRUDServices = require('../services/CRUDServices');

class HomeControllerAPI {
    //GET /show-user
    async showUser(req, res) {
        if (req.query.page) {
            const page = req.query.page

            const usersByPage = await CRUDServices.getUsersByPage(page);
            const numUser = await CRUDServices.countUser();
            const numPage = Math.ceil(numUser / 5);

            res.json({
                usersByPage: usersByPage,
                numPage: numPage,
            });
        }
        else {
            const results = await CRUDServices.getAllUsers();
            res.json(results);
        }
    }

    //GET /show-user/:id
    async showUserByID(req, res) {
        const id = req.params.id;

        const results = await CRUDServices.getUserByID(id);

        res.json(results);
    }

    //POST /store-user
    async storeUser(req, res) {
        const email = req.body.email;
        const name = req.body.name;
        const city = req.body.city;

        const id = await CRUDServices.createNewUser(email, name, city);
        //res.json('added a user');
        res.json({
            message: 'add a user',
            id: id, //id of new user
        });
    }

    //POST /update-user
    async updateUser(req, res) {
        const email = req.body.email;
        const name = req.body.name;
        const city = req.body.city;
        const id = req.body.id;

        await CRUDServices.updateUserByID(id, email, name, city);
        res.json('updated a user');
    }

    //POST /delete-user
    async deleteUser(req, res) {
        const id = req.body.id;

        await CRUDServices.deleteUserByID(id);
        res.json('deleted a user');
    }

    //GET /count-user
    async countUser(req, res) {

        const results = await CRUDServices.countUser();
        res.json({
            message: 'count all user',
            totalUser: results, //number of new user
        });
    }
}

module.exports = new HomeControllerAPI