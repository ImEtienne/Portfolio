'use strict'
require('dotenv').config();
const express = require('express');
const port = process.env.PORT; 
const http = require('http');
const path = require('path');
const indexRoutes = require('./routes/index');
const contactRoutes = require('./routes/contact'); 
const cors = require('cors');


// Configuration
const app = express();
const server = http.createServer(app);
app.set("port", port);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname)));
app.use(express.static('public'));
app.use(cors());

// Routes
app.use('/', indexRoutes);
app.use('/', contactRoutes);

// Lancement du serveur
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
