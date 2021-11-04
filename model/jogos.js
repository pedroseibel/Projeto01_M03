const mongoose = require("mongoose");

const jogosModel = new mongoose.Schema({
  nome: { type: String, required: true },
  genero: { type: String, required: true },
  desenvolvedor: { type: String, required: true },
  plataforma: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Jogo = mongoose.model("Jogos", jogosModel);

module.exports = Jogo;
