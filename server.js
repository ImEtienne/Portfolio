'use strict'
require('dotenv').config();
const express = require('express');
const port = process.env.PORT; 
const http = require('http');
const path = require('path');
const hostname = process.env.HOSTNAME || localhost;
const indexRoutes = require('./routes/index');
const contactRoutes = require('./routes/contact'); 

// Configuration
const app = express();
const server = http.createServer(app);
app.set("port", port);
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname)));
app.use(express.static('public'));

// Routes
app.use('/', indexRoutes);
app.use('/', contactRoutes);

// Lancement du serveur
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
