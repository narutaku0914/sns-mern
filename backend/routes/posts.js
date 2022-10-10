const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

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

// 投稿にいいね、既にしていたら取り消す
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("投稿にいいねをしました。");
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(403).json("この投稿へのいいねを取り消しました。");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// タイムラインの取得
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    // フォローしているユーザーの取得
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
