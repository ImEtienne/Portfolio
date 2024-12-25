'use strict'
const pool = require('../config/db'); 

/**
 * Récupère la liste de tous les projets depuis la table "projects".
 * @param
 * @returns 
 */
async function getAllProjects() {
  const [rows] = await pool.query('SELECT * FROM projects');
  return rows;
}

module.exports = { getAllProjects };
