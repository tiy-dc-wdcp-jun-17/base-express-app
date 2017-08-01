const express = require("express");
const router = express.Router();

const client = require("../dbConnection");

router.get("/", (req, res) => {
  // client.db.collection.find((err, data) => {
  //   if (err) {
  //     // handle the error
  //   } else {
  //     res.render("index", { secondsToRender: Date.now() - req._startTime });
  //   }
  // });

  res.render("index", { secondsToRender: Date.now() - req._startTime });
});

module.exports = router;
