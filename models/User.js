const mongoose = require('mongoose');

// Définition du schéma de l'utilisateur
const UserSchema = new mongoose.Schema({
    nom,
    email,
    motDePasse,
    dateCreation,
});

// Création du modèle User à partir du schéma
const User = mongoose.model('User', UserSchema);

module.exports = User;
