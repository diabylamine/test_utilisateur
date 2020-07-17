
const Utilisateur = require('./Utilisateur');

const utilisateur = new Utilisateur({
    email: 'diabylamineàgmail.com',
    nom: 'Diaby',
    prenom: 'Lamine',
    age: 26
});

console.log({utilisateur});
