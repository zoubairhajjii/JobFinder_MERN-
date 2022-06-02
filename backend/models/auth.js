const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Telephone: { type: String, required: true, unique: true },
  Profession: String,
  Adresse: String,
  Age: String,
  photo_profil: String,
  role: {
    type: String,
    enum: ["Admin", "Professionnel", "Demandeur"],
    default: "Demandeur",
  },
});

module.exports = mongoose.model('user', UserSchema);
