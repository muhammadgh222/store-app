const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "Hello",
  });
});

module.exports = app;
