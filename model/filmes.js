const mongoose = require("mongoose");

const filmesModel = new mongoose.Schema({
  nome: { type: String, required: true },
  genero: { type: String, required: true },
  faixaEtaria: { type: Number },
  dataCriacao: { type: Date, default: Date.now },
});

const Filme = mongoose.model("Filmes", filmesModel);
module.exports = Filme;
