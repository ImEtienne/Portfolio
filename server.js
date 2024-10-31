'use strict'
var express = require('express');
var nodemailer = require('nodemailer');
var mysql = require('mysql');
var port = process.env.PORT || 3000; // ou le port de votre choix
var http = require('http');
var path = require('path');

//crée une application express 
var app = express();
var server = http.Server(app);
app.set("port", port);

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "/index.html")));
app.use(express.static(path.join(__dirname)));


// Configurer la connexion à la base de données
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'portfolio'
});

// Routing
// Endpoint pour traiter les soumissions de formulaire
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.post("/", function (req, res) {
    var firstname = req.body.firstname;
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;
    var object = req.body.object;
    var message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'graddykibongani@gmail.com',
            pass: 'exjv pnhy mlcu lgjp'
        },
    });

    var mailOptions = {
        from: email,
        to: 'etiennekibonganiwork@gmail.com',
        subject: object,
        text: `Prenom: ${firstname}\nNom: ${username}\nEmail: ${email}\nTéléphone: ${phone}\nSujet: ${object}\nMessage: ${message}`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log("Email Send : " + info.response);
            res.send('success')
        }
        res.redirect("/");
    });

    // Récupérer les données du formulaire depuis le corps de la requête
    console.log('Données reçues:', req.body);
    if (!firstname || !username || !email || !phone || !object || !message) {
        return res.status(400).json({ success: false, message: 'Tous les champs sont obligatoires.' });
    }
     // Insérer les données dans la base de données
    pool.query('INSERT INTO messages (firstname, username, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)', 
    [firstname, username, email, phone, object, message], (error, results) => {
        if (error) {
            console.error('Erreur lors de l\'insertion dans la base de données:', error);
            return res.send(error);
        }
        console.log('Message inséré dans la base de données:', results);
        res.send('success');
    });
    
});


/**
// Endpoint pour traiter les soumissions de formulaire
app.get('/send-message', (req, res) => {
    // Récupérer les données du formulaire depuis le corps de la requête
    const { firstname, username, email, phone, object, message } = req.body;
    console.log('Données reçues:', req.body);

    if (!firstname || !username || !email || !phone || !subject || !message) {
        return res.status(400).json({ success: false, message: 'Tous les champs sont obligatoires.' });
    }

    // Insérer les données dans la base de données
    pool.query('INSERT INTO messages (firstname, username, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)', 
    [firstname, username, email, phone, object, message], (error, results) => {
        if (error) {
            console.error('Erreur lors de l\'insertion dans la base de données:', error);
            return res.status(500).json({ success: false, message: 'Erreur lors de l\'insertion dans la base de données' });
        }
        console.log('Message inséré dans la base de données:', results);

        // Envoyer un e-mail
        let mailOptions = {
            from: email,
            to: 'etiennekibonganiwork@gmail.com',
            subject: 'Nouveau message de votre portfolio',
            text: `Prenom: ${firstname}\nNom: ${username}\nEmail: ${email}\nTéléphone: ${phone}\nSujet: ${object}\nMessage: ${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
                return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'e-mail' });
            }
            console.log('E-mail envoyé:', info.response);

            res.json({ success: true, message: 'Message envoyé avec succès' });
        });
    });
});
*/

// Démarrer le serveur
server.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
