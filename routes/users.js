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
      .json("あなたはこのアカウントを更新する権限はありません。");
  }
});

router.get("/", (req, res) => {
  res.send("uer router");
});

module.exports = router;
