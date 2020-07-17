const Utilisateur = require('.');
const UtilisateurValidator = require('../Validators/Utilisateur');
jest.mock('.'); // Utilisateur est dorénavant un constructeur "mock".

beforeEach(() => {
    
    Utilisateur.mockClear();
});

it(` lutilsateur est bien creer  `, function () {
    new Utilisateur({
        email: 'diabylamine@gmail.com',
        nom: 'Diaby',
        prenom: 'Lamine',
        age: 26
    });

    expect(Utilisateur).toHaveBeenCalledTimes(1);
});

it(`il faut creer avec de bons paramètres`, function () {
    const utilisateur =  new Utilisateur({
        email: 'diabylamine@gmail.com',
        nom: 'Diaby',
        prenom: 'Lamine',
        age: 26
    });

    expect(utilisateur).toBeDefined();
});

it(`erreur si on ne met pas d'arguments`, function () {
   const utilisateur = new Utilisateur({});

   Utilisateur.mockImplementation(() => new Utilisateur({}));

   expect()
});

it(` erreur si pas le nom`, function () {
    expect(function () {
        new Utilisateur({
            email: 'diabylamine@gmail.com',
            prenom: 'Lamine',
            age: 26
        });
    }).toThrowError(); // TODO: Ajout du type d'erreur
});

it(`erreur si on ne pas le prénom`, function () {
    expect(function () {
        new Utilisateur({
            email: 'diabylamine@gmail.com',
            nom: 'Diaby',
            age: 26
        });
    }).toThrow(); // TODO: Ajout du type d'erreur
});


it(`erreur si l'adresse mail n'a pas le bon format`, function () {
    expect(function () {
        new Utilisateur({
            email: 'diabylamineàgmail-com',
            nom: 'Diaby',
            prenom: 'Lamine',
            age: 26
        });
    }).toThrow(); // TODO: Ajout du type d'erreur
});

it(`erreur si l'age est en dessous de 13 ans`, function () {
    expect(function () {
        new Utilisateur({
            email: 'diabylamine@gmail.com',
            nom: 'Diaby',
            prenom: 'Lamine',  
            age: 11
        });
    }).toThrow(); // TODO: Ajout du type d'erreur
});
