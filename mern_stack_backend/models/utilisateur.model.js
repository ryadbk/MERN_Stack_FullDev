const mongoose = require('mongoose');


const utilisateurSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
    // unique: true,
    // trim: true,
    // minlength: 3
  },
  prenom :{
    type: String,
    required: true
  },
  age : {
    type: Number,
    required:true
  }
} );


module.exports = mongoose.model('utlisateur', utilisateurSchema);;