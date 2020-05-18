const router = require('express').Router();

let User = require('../models/utilisateur.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
  const email = req.body.email;
  const motDePasse = req.body.motDePasse;
  const dateNaissance = Date(req.body.dateNaissance);
  const nom = req.body.nom;
  const prenom = req.body.prenom;

  const newUser = new User({email, motDePasse ,dateNaissance,nom,prenom});

  newUser.save()
    .then(() => res.json('utilisateur ajoute!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;