const profilModel = require("../models/profilInfo.model");

const getProfil = async (req, res) => {
  const profil = await PostModel.find();
  res.status(200).json(profil);
};

const setProfil = async (req, res) => {
  const profil = await profilModel.create({
    pseudo: req.body.pseudo,
  });
  if (!req.body.pseudo) {
    res.status(400).json({ pseudo: "Merci d'ajouter un pseudo" });
  } else {
    try {
      res.status(200).json(profil);
      // res.json({ profil: "It's good" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

module.exports = { setProfil, getProfil };
