const express = require('express');
const router = express.Router();
const { addMessage } = require('../controllers/contactController');
const { validateForm } = require('../utils/validation'); 
const { sendEmail } = require('../utils/email');         

// Route pour gérer le formulaire de contact
router.post('/', async (req, res) => {
    const data = req.body;

    // Valide les données du formulaire
    const validation = validateForm(data);
    if (!validation.isValid) {
        return res.status(400).json({ success: false, message: validation.message });
    }

    try {
        // Ajoute le message dans la base de données
        addMessage(data, async (error, results) => {
            if (error) {
                console.error('Erreur lors de l\'ajout du message:', error);
                return res.status(500).send('Erreur serveur : impossible d\'enregistrer le message.');
            }

            // Envoi de l'email après l'insertion dans la base
            try {
                await sendEmail(data);
                console.log('Email envoyé avec succès !');
                return res.status(200).send('success')
            } catch (emailError) {
                console.error('Erreur lors de l\'envoi de l\'email:', emailError);
                return res.status(500).send('Message enregistré, mais l\'email n\'a pas pu être envoyé.');
            }
        });
    } catch (error) {
        console.error('Erreur inattendue:', error);
        res.status(500).send('Une erreur inattendue s\'est produite.');
    }
});

module.exports = router;
