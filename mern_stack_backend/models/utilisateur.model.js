const mongoose = require('mongoose');


const utilisateurSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
    // unique: true,
    // trim: true,
    // minlength: 3
  },
  motDePasse :{
    type: String,
    required: true
  },
  dateNaissance : {
    type: Date,
    required:true
  },
  nom:{
    type:String,
    required:true
  },
  prenom:{
    type:String,
    required:true
  }
} );


module.exports = mongoose.model('utlisateur', utilisateurSchema);;