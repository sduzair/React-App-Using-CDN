const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3001, function () {
  console.log("Server listening on Port # 3001");
});