const express = require("express");
const router = express.Router();
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
} = require("../controllers/post.controller");

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", editPost);

router.delete("/:id", deletePost);

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké : " + id });
});
router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post liké :  " + req.params.id });
});
module.exports = router;
