const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("uer router");
});

module.exports = router;
