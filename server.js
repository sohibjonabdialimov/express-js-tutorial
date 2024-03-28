const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  console.log("Here");
  // res.send("Hi Sohibjon");
  // res.sendStatus(202);
  res.render("index", { text: "Welcome to Tashkent"});
})
app.listen(3000);

