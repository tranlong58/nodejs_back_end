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

    async createNewUser(email, name, city) {
        const [results, fields] = await connection.query(
            'insert into Users(email, name, city) values(?, ?, ?)',
            [email, name, city]
        );
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
}

module.exports = new CRUDServices