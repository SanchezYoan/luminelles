const express = require("express");
const router = express.Router();
const { setPosts } = require("../controllers/post.controller");

router.get("/", (req, res) => {
  res.json({ message: "this is data" });
});

router.post("/", setPosts);

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Post supprimé id : " + req.params.id });
});

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké : " + id });
});
router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post liké :  " + req.params.id });
});
module.exports = router;