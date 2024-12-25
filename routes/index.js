const express = require('express');
const router = express.Router();
const { getAllProjects } = require('../controllers/projectsController');

router.get('/', async (req, res) => {
    try {
        // la liste des projets sur la page d'accueil
        const projects = await getAllProjects();
        
        res.render('index', {
            portfolioItems: projects 
        });
    } catch (error) {
        console.error('Erreur lors de la requête MySQL :', error);
        res.status(500).send('Erreur serveur');
    }
});

module.exports = router;