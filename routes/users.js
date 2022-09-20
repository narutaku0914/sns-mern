const router = require("express").Router();
const User = require("../models/User");

// update
router.put("/:id", async (req, res) => {
  if (req.body.isAdmin || req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      return res.status(200).json("ユーザー情報が更新されました。");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("あなたはこのユーザーを更新する権限はありません。");
  }
});

// delete
router.delete("/:id", async (req, res) => {
  if (req.body.isAdmin || req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("ユーザー情報が削除されました。");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json("あなたはこのユーザーを削除する権限はありません。");
  }
});

// get
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    return res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// ユーザーフォロー
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const followee = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!followee.followers.includes(req.body.userId)) {
        await followee.updateOne({
          $push: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $push: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("フォローに成功しました。");
      } else {
        return res.status(403).json("既にフォローしています。");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自身をフォローできません。");
  }
});

// フォロー解除
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const unfollowee = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (unfollowee.followers.includes(req.body.userId)) {
        await unfollowee.updateOne({
          $pull: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $pull: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("フォロー解除しました。");
      } else {
        return res.status(403).json("元々フォローしていません。");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自身をフォローできません。");
  }
});

module.exports = router;
