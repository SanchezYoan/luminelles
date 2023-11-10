const profilModel = require("../models/profilInfo.model");

const getProfil = async (req, res) => {
  const profil = await profilModel.find();
  res.status(200).json(profil);
};

module.exports = { getProfil };
