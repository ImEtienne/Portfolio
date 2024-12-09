const pool = require('../config/db');

// Fonction pour insérer un message dans la base de données
const addMessage = (data, callback) => {
    const { firstname, username, email, phone, object, message } = data;


    // Exécute la requête pour insérer les données
    pool.query(
        'INSERT INTO messages (firstname, username, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)', 
        [firstname, username, email, phone, object, message], 
        (error, results) => {
            if (error) {
                console.error('Erreur lors de l\'insertion dans la base de données:', error);
                return callback(error, null); // Retourne l'erreur via le callback
            }

            console.log('Message inséré dans la base de données:', results);
            callback(null, results); // Retourne les résultats via le callback
        }
    );
};

module.exports = { addMessage };
