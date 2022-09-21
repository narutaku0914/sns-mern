const router = require("express").Router();
const Post = require("../models/Post");

// create
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const updatePost = await Post.findById(req.params.id);
    if (updatePost.userId === req.body.userId) {
      await updatePost.updateOne({
        $set: req.body,
      });
      return res.status(200).json("投稿内容が更新されました。");
    } else {
      return res
        .status(403)
        .json("あなたはこの投稿を更新する権限はありません。");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const deletePost = await Post.findById(req.params.id);
    if (deletePost.userId === req.body.userId) {
      await deletePost.deleteOne();
      return res.status(200).json("投稿が削除されました。");
    } else {
      return res
        .status(403)
        .json("あなたはこの投稿を削除する権限はありません。");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
