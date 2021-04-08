const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://leolee:1111@boilerplate.6asoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
