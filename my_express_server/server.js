const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Hello, World!asd!!!!!!!</h2>");
});

app.get("/contact",(req,res) => {
  res.send("contact : k7nsuy2@gmail.com!!!asd");
});

app.listen(3000,function() {
  console.log("Server started on port 3000");
});
