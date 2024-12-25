const mysql = require('mysql2/promise');

// Configurer la connexion à la base de données
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'portfolio'
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
