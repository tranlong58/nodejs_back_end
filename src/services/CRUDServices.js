const connection = require('../config/database');

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        'select * from Users'
    );

    return results;
};

const createNewUser = async (email, name, city) => {
    const [results, fields] = await connection.query(
        'insert into Users(email, name, city) values(?, ?, ?)',
        [email, name, city]
    );
};


module.exports = {
    getAllUsers, createNewUser
}