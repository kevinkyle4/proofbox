var express = require("express");
var router = express.Router();

var userRouter = require("./userRouter");
var receiptRouter = require("./receiptRouter");
var imageRouter = require("./imageRouter");

router.use("/api/user", userRouter);
router.use("/api/receipt", receiptRouter);

// multer

router.use("/uploadmulter", imageRouter);

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
