const express = require("express");
const router = express.Router();
const Musicas = require("../model/musicas");

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.get("/listar", async (req, res) => {
  await Musicas.find({})
    .then((musicas) => {
      console.log(musicas);
      res.status(200).json(musicas);
    })
    .catch((err) => {
      res.status(204).json({ message: "Não foi possível encontrar." });
      console.error(err);
    });
});

router.post("/add", async (req, res) => {
  await Musicas.create(req.body)
    .then(() => {
      res.status(200).json({ message: "Cadastro efetuado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

router.put("/edit/:id", async (req, res) => {
  await Musicas.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Música alterada com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro" });
      console.error(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
  await Musicas.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Música deletada com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

module.exports = router;
