'use strict'
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // 3. Récupération des projets depuis la base
    const [rows] = await pool.query('SELECT * FROM projects');
    // rows contient tous les résultats de la requête SELECT

    // 4. Rendu de la vue EJS en passant les données
    res.render('index', { portfolioItems: rows });
  } catch (err) {
    console.error('Erreur lors de la requête MySQL :', err);
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
