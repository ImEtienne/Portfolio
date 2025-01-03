'use strict'
const mysql = require('mysql2/promise');

// Configurer la connexion à la base de données
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.getConnection()
  .then(connection => {
    console.log('Connecté à MySQL !');
    // libérer la connexion
    connection.release();
  })
  .catch(err => {
    console.error('Erreur de connexion à MySQL :', err);
  });

module.exports = pool;
