const mysql = require('mysql');

// Configurer la connexion à la base de données
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'portfolio'
});

module.exports = pool;
