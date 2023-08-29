const connection = require('../config/database');
const CRUDServices = require('../services/CRUDServices');

class HomeControllerAPI {
    //GET /show-user
    async showUser(req, res) {
        const results = await CRUDServices.getAllUsers();

        res.json(results);
    }

    //POST /store-user
    async storeUser(req, res) {
        const email = req.body.email;
        const name = req.body.name;
        const city = req.body.city;

        await CRUDServices.createNewUser(email, name, city);
        res.json('added a user');
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

    //POST /delete-user/:id
    async deleteUser(req, res) {
        const id = req.params.id;

        await CRUDServices.deleteUserByID(id);
        res.json('deleted a user');
    }
}

module.exports = new HomeControllerAPI