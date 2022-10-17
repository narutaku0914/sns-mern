const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const uploadRoute = require("./routes/upload");
const PORT = 3000;
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// DB接続
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DBと接続中...");
  })
  .catch((err) => {
    console.log("error");
  });

// ミドルウェア
// 静的ファイルのパス設定
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
// 画像アップロード
app.use("/api/upload", uploadRoute);

app.listen(PORT, () => console.log("サーバーが起動しました。"));
