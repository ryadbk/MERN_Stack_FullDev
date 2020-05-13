const router = require('express').Router();
let User = require('../models/utilisateur.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ajouter').post((req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const age = Number(req.body.age);

  const newUser = new User({nom, prenom , age});

  newUser.save()
    .then(() => res.json('utilisateur ajoute!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;