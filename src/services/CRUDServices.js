const connection = require('../config/database');

class CRUDServices {

    //user
    async getAllUsers() {
        const [results, fields] = await connection.query(
            'select * from Users'
        );

        return results;
    };

    async getUserByID(id) {
        const [results, fields] = await connection.query(
            'select * from Users where id = ?',
            [id]
        );

        const user = results && results.length > 0 ? results[0] : {};

        return user;
    };

    async getUsersByPage(page) {
        const offset = (page - 1) * 10;
        const [results, fields] = await connection.query(
            'select * from Users limit ?, 10',
            [offset]
        );
        return results;
    };

    async createNewUser(email, name, city) {
        const [results, fields] = await connection.query(
            'insert into Users(email, name, city) values(?, ?, ?)',
            [email, name, city]
        );

        return results.insertId;
    };

    async updateUserByID(id, email, name, city) {
        const [results, fields] = await connection.query(
            'update Users set email=?, name=?, city=? where id=?',
            [email, name, city, id]
        );
    };

    async deleteUserByID(id) {
        const [results, fields] = await connection.query(
            'delete from Users where id=?',
            [id]
        );
    };

    async countUser() {
        const [results, fields] = await connection.query(
            'select count(id) as totalUser from Users'
        );

        return results[0].totalUser;
    }


    //customer
    async createNewCustomer(name, email, pass) {
        const [results, fields] = await connection.query(
            'insert into Customers(name, email, pass) values(?, ?, ?)',
            [name, email, pass]
        );

        return results.insertId;
    };

    async readAllCustomer() {
        const [results, fields] = await connection.query(
            'select * from Customers'
        );

        return results;
    };

    async readCustomersByPage(page) {
        const offset = (page - 1) * 10;
        const [results, fields] = await connection.query(
            'select * from Customers limit ?, 10',
            [offset]
        );

        return results;
    };

    async updateCustomerByID(id, name, email, pass) {
        const [results, fields] = await connection.query(
            'update Customers set name=?, email=?, pass=? where id=?',
            [name, email, pass, id]
        );
    };

    async deleteCustomerByID(id) {
        const [results, fields] = await connection.query(
            'delete from Customers where id=?',
            [id]
        );
    };

    async countCustomer() {
        const [results, fields] = await connection.query(
            'select count(id) as totalCustomer from Customers'
        );

        return results[0].totalCustomer;
    }
}

module.exports = new CRUDServices