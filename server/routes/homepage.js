const express = require("express");
const router = express.Router();

const client = require("../dbConnection");

router.get("/", (req, res) => {
  /* Below is code to demonstrate a call to mongo via the required DB connection.  You will need to change `collection` to something that is relevant for your application. */

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
