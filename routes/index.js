const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Portfolio', description: 'Bienvenue sur mon site' });
});

module.exports = router;