const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema({
  nomService: { type: String, required: true },
  price:String,
  DescriptionService: { type: String, required: true },
  nom_de_fournisseur: String,
  localisation: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
  },
});

module.exports = mongoose.model("Service", ServiceSchema);
