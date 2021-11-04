const mongoose = require("mongoose");

const musicasModel = new mongoose.Schema({
  nome: { type: String, required: true },
  artista: { type: String, required: true },
  ano: { type: Number },
  dataCriacao: { type: Date, default: Date.now },
});

const Musica = mongoose.model("Musicas", musicasModel);

module.exports = Musica;
