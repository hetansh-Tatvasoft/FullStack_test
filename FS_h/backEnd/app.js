const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("This is demo app.");
});

app.listen(3000);
