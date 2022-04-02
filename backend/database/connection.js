const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pontestur@2022',
    database: 'vrseries'
})

module.exports = Connection;
