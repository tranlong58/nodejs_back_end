const connection = require('../config/database');
const CRUDServices = require('../services/CRUDServices');

class HomeControllerAPI {
    //user
    //GET /show-user
    async showUser(req, res) {
        if (req.query.page) {
            const page = req.query.page;

            const usersByPage = await CRUDServices.getUsersByPage(page);
            const numUser = await CRUDServices.countUser();
            const numPage = Math.ceil(numUser / 10);

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
            totalUser: results, //number of user
        });
    }


    //customer
    //POST /create-customer
    async createCustomer(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const pass = req.body.pass;

        const id = await CRUDServices.createNewCustomer(name, email, pass);
        //res.json('added a user');
        res.json({
            message: 'add a customer',
            id: id, //id of new customer
        });
    }

    //GET /read-customer
    async readCustomer(req, res) {
        if (req.query.page) {
            const page = req.query.page;

            const customersByPage = await CRUDServices.readCustomersByPage(page);
            const totalCustomer = await CRUDServices.countCustomer();
            const totalPage = Math.ceil(totalCustomer / 10);

            res.json({
                customersByPage: customersByPage,
                totalPage: totalPage,
            });
        }
        else {
            const results = await CRUDServices.readAllCustomer();
            res.json(results);
        }
    }

    //PUT /update-customer 
    async updateCustomer(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const email = req.body.email;
        const pass = req.body.pass;

        await CRUDServices.updateCustomerByID(id, name, email, pass);
        res.json({
            message: 'updated a customer',
        });
    }

    //DELETE /delete-customer
    async deleteCustomer(req, res) {
        const id = req.body.id;
        await CRUDServices.deleteCustomerByID(id);
        res.json({
            message: 'deleted a customer',
        });
    }

    //GET /count-customer
    async countCustomer(req, res) {
        const results = await CRUDServices.countCustomer();
        res.json({
            message: 'count all customer',
            totalCustomer: results, //number of customer
        });
    }

    //category
    //POST /create-category
    async createCategory(req, res) {
        const name = req.body.name;
        const kind = req.body.kind;

        const id = await CRUDServices.createNewCategory(name, kind);
        //res.json('added a user');
        res.json({
            message: 'add a category',
            id: id, //id of new category
        });
    }

    //GET /read-category
    async readCategory(req, res) {
        if (req.query.page) {
            const page = req.query.page;

            const categoryByPage = await CRUDServices.readCategoryByPage(page);
            const totalCategory = await CRUDServices.countCategory();
            const totalPage = Math.ceil(totalCategory / 10);

            res.json({
                categoryByPage: categoryByPage,
                totalPage: totalPage,
            });
        }
        else {
            const results = await CRUDServices.readAllCategory();
            res.json(results);
        }
    }

    //PUT /update-category 
    async updateCategory(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const kind = req.body.kind;

        await CRUDServices.updateCategoryByID(id, name, kind);
        res.json({
            message: 'updated a category',
        });
    }

    //DELETE /delete-category
    async deleteCategory(req, res) {
        const id = req.body.id;
        await CRUDServices.deleteCategoryByID(id);
        res.json({
            message: 'deleted a category',
        });
    }

    //GET /count-category
    async countCategory(req, res) {
        const results = await CRUDServices.countCategory();
        res.json({
            message: 'count all category',
            totalCategory: results, //number of category
        });
    }
}

module.exports = new HomeControllerAPI