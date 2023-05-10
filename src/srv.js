const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  console.log("got request");
  res.send({ message: "users" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
