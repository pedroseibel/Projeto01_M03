const express = require("express");
const router = express.Router();
const Filmes = require("../model/filmes");

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.get("/listar", async (req, res) => {
  await Filmes.find({})
    .then((filmes) => {
      res.status(200).json(filmes);
    })
    .catch((err) => {
      res.status(204).json({ message: "Não foi possível encontrar." });
      console.error(err);
    });
});

router.post("/add", async (req, res) => {
  await Filmes.create(req.body)
    .then(() => {
      res.status(200).json({ message: "Cadastro efeituado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

router.put("/edit/:id", async (req, res) => {
  await Filmes.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Filme alterado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
  await Filmes.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Filme deletado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

module.exports = router;
