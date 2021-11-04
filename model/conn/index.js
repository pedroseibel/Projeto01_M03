const mongoose = require("mongoose");

async function Conn() {
  await mongoose
    .connect("mongodb://localhost:27017/db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("O banco de dados foi conectado.");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = Conn;
