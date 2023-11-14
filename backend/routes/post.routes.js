const express = require("express");
const router = express.Router();
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/post.controller");
const { setProfil, getProfil } = require("../controllers/profil.controller");

router.post("/profil", setProfil);
// router.post("/profil", (req, res) => {
//   res.json({ pseudo: req.body.pseudo });
// });

router.get("/profil", getProfil);

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

router.patch("/like-post/:id", likePost);

router.patch("/dislike-post/:id", dislikePost);

module.exports = router;
