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


    //category
    async createNewCategory(name, kind) {
        const [results, fields] = await connection.query(
            'insert into Category(name, kind) values(?, ?)',
            [name, kind]
        );

        return results.insertId;
    };

    async readAllCategory() {
        const [results, fields] = await connection.query(
            'select * from Category'
        );

        return results;
    };

    async readCategoryByPage(page) {
        const offset = (page - 1) * 10;
        const [results, fields] = await connection.query(
            'select * from Category limit ?, 10',
            [offset]
        );

        return results;
    };

    async updateCategoryByID(id, name, kind) {
        const [results, fields] = await connection.query(
            'update Category set name=?, kind=? where id=?',
            [name, kind, id]
        );
    };

    async deleteCategoryByID(id) {
        const [results, fields] = await connection.query(
            'delete from Category where id=?',
            [id]
        );
    };

    async countCategory() {
        const [results, fields] = await connection.query(
            'select count(id) as totalCategory from Category'
        );

        return results[0].totalCategory;
    }

    //transaction
    async createNewTransaction(customer_id, category_id, amount, detail, date_created) {
        const [results, fields] = await connection.query(
            'insert into Transactions(customer_id, category_id, amount, detail, date_created) values (?, ?, ?, ?, ?)',
            [customer_id, category_id, amount, detail, date_created]
        );

        return results.insertId;
    };

    async readAllTransaction() {
        const [results, fields] = await connection.query(
            //`select *, DATE_FORMAT(date_created, '%d-%m-%Y') as date_created_format from Transactions`
            `select Transactions.id, customer_id, category_id, name as category_name, kind as category_kind, amount, detail, date_created, DATE_FORMAT(date_created, '%d-%m-%Y') as date_created_format 
            from Transactions, Category 
            where Transactions.category_id = Category.id
            order by date_created desc`,
        );

        return results;
    };

    async readTransactionByMonth(month, year) {
        const [results, fields] = await connection.query(
            //`select *, DATE_FORMAT(date_created, '%d-%m-%Y') as date_created_format from Transactions where month(date_created) = ? and year(date_created) = ?`,
            //`select *, DATE_FORMAT(date_created, '%d-%m-%Y') as date_created_format from Transactions, Category where month(date_created) = ? and year(date_created) = ? and Transactions.category_id = Category.id `,
            `select Transactions.id, customer_id, category_id, name as category_name, kind as category_kind, amount, detail, date_created, DATE_FORMAT(date_created, '%d-%m-%Y') as date_created_format 
            from Transactions, Category 
            where month(date_created) = ? and year(date_created) = ? and Transactions.category_id = Category.id
            order by date_created desc`,
            [month, year]
        );

        return results;
    };

    async updateTransactionByID(id, customer_id, category_id, amount, detail, date_created) {
        const [results, fields] = await connection.query(
            'update Transactions set customer_id=?, category_id=?, amount=?, detail=?, date_created=? where id=?',
            [customer_id, category_id, amount, detail, date_created, id]
        );
    };

    async deleteTransactionByID(id) {
        const [results, fields] = await connection.query(
            'delete from Transactions where id=?',
            [id]
        );
    };
}

module.exports = new CRUDServices