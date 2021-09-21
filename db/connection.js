const mysql = require('mysql2');
const util = require('util');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Oriongs1997!",
    database: "employees"
});
connection.connect();

//each query call into a promise
connection.query = util.promisify(connection.query);
module.exports = connection;