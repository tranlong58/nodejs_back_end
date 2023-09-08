const connection = require('../config/database');

class CRUDServices {
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
        const offset = (page - 1) * 5;
        const [results, fields] = await connection.query(
            'select * from Users limit ?, 5',
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
}

module.exports = new CRUDServices