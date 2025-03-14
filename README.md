# Portfolio | CV en ligne 

Bienvenue sur le portfolio d'Etienne Kibongani Lombo. Ce portfolio présente mes projets de développement logiciel, mes compétences techniques, ainsi que mon parcours professionnel. Vous y trouverez des informations sur mes projets personnels, mes expériences en entreprise, ainsi que mes compétences en développement Full Stack, principalement en Java, Python, JavaScript, HTML, CSS, et Ruby.

## Table des matières
- [Installation](#installation)
- [Usage](#usage)
- [Structure de l'application](#structure-de-lapplication)
- [Technologies utilisées](#technologies-utilisées)
- [Projets](#projets)
- [Licence](#licence)

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
- Node.js (version 16 ou supérieure)
- npm 
- Un éditeur de code comme Visual Studio Code ou tout autre IDE de votre choix.

### Clone du projet

Clonez ce dépôt dans votre répertoire local :
```bash
git clone https://github.com/ImEtienne/portfolio.git

```
### Installation des dépendances

Une fois le dépôt cloné, accédez au répertoire du projet et installez les dépendances nécessaires :

```bash
cd portfolio
npm install

```
### Lancer l'application

```bash
npm run dev

```

## usage
Le portfolio présente les sections suivantes :

 * Accueil : La page d'accueil qui introduit mon travail, avec des liens vers les différentes 
   sections du portfolio.
 * À propos : Une présentation personnelle où je parle de mon parcours, de mes objectifs 
   professionnels et de mes passions.
 * Formation : Un récapitulatif de ma formation académique et professionnelle.
 * Compétences : Détaille mes compétences en développement, avec des descriptions claires et 
   concises.
 * Parcours professionnel : Mes expériences professionnelles passées et actuelles, avec des 
   descriptions détaillées de mes missions.
 * Portfolio : Un aperçu de mes projets récents, y compris des applications web que j'ai créées ou 
   auxquelles j'ai contribué.
 * Contact : Une section pour me contacter, y compris un formulaire de contact.


 ## Structure de l'application

 ```bash

portfolio/
├── config/                    # Fichiers de configuration
├── controllers/               # Logique métier pour le contact et les projets
│   ├── contactController.js   # Gère les interactions avec les données de contact
│   └── projectsController.js  # Gère les interactions avec les projets
├── node_modules/              # Modules installés via npm
├── public/                    # Fichiers accessibles publiquement (index.html, images)
│   ├── assets/                # Contient les ressources comme les images, icônes
│   │   └── images/            # Images du portfolio
│   ├── css/                   # Feuilles de style CSS
│   └── js/                    # JavaScript spécifique à la partie front-end
├── routes/                    # Routes de l'application
├── utils/                     # Utilitaires divers pour l'application
├── views/                     # Vues côté serveur ou gestion de l'interface
├── .env                       # Variables d'environnement
├── .gitignore                 # Fichiers et répertoires à ignorer par Git
├── LICENSE                    # Licence du projet
├── package-lock.json          # Gestion des versions de paquets npm
├── package.json               # Dépendances et scripts npm
├── README.md                  # Documentation du projet
└── server.js
 ```

 ## Technologies utilisées

Ce portfolio utilise les technologies suivantes :

- **Frontend** : HTML5, CSS3, SCSS, JavaScript
- **Backend** : Node.js, Express.js
- **Templates** : EJS (Embedded JavaScript) pour générer des vues dynamiques côté serveur.
- **Base de données** : MySQL, utilisée pour stocker les projets ainsi que les données reçues via 
                        les formulaires. Ces données sont supprimées après leur traitement.
- **Autres outils** : npm pour la gestion des dépendances, Webpack pour le bundling du code.


## Projets

Voici quelques-uns des projets inclus dans ce portfolio :

### Projets terminés et disponibles sur le portfolio :
- **Back-office pour Bateau de Thibault** : Un back-office développé avec Angular et Python (Django ou Flask) pour gérer un point de revente de produits.
- **Portfolio v1** : Version 1 de mon portfolio, réalisée avec HTML, CSS et JavaScript.
- **Site de réservation de table dans un restaurant** : Un site permettant aux utilisateurs de réserver une table dans un restaurant en ligne.
- **Pacman** : Un jeu Pacman développé en Java, avec une interface graphique réalisée avec Java Swing.
- **Gestion d'un établissement scolaire** : Une application de gestion scolaire réalisée avec Laravel, Bootstrap, HTML, CSS, JavaScript, et une base de données SQLite.
- **Falling Snake** : Un jeu de type Falling Snake en Java, avec une interface graphique en JavaFX.
- **Concours Chat** : Un projet réalisé avec Laravel, HTML, CSS, JavaScript et MySQL permettant d'organiser des concours pour les chats.

### Projets en cours de réalisation :
- **Blog Personnel** : Un blog que je suis en train de réaliser avec Laravel, avec une migration vers un front-end Angular pour pratiquer ce framework.
- **Système de réservation de ressources** : Une application de réservation que je développe actuellement avec Spring Boot et Angular pour approfondir mes compétences dans ces technologies.


## LICENSE 

Ce projet est sous licence MIT - voir le fichier [LICENSE](https://github.com/ImEtienne/portfolio?tab=MIT-1-ov-file#) pour plus de détails.


