const profilModel = require("../models/profilInfo.model");

const setProfil = async (req, res) => {
  const profil = await profilModel.create({
    pseudo: req.body.pseudo,
  });
  if (!req.body.pseudo) {
    res.status(400).json({ pseudo: "Merci d'ajouter un profil" });
  } else {
    try {
      res.status(200).json(profil);
      // res.json({ profil: "It's good" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = { setProfil };
