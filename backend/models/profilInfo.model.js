const mongoose = require("mongoose");

const profilSchema = mongoose.Schema({
  pseudo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("profil", profilSchema);
