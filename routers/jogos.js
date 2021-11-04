const express = require("express");
const router = express.Router();
const Jogos = require("../model/jogos");

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.get("/listar", async (req, res) => {
  await Jogos.find({})
    .then((jogos) => {
      console.log(jogos);
      res.status(200).json(jogos);
    })
    .catch((err) => {
      res.status(204).json({ message: "Não foi possível encontrar." });
      console.error(err);
    });
});

router.post("/add", async (req, res) => {
  await Jogos.create(req.body)
    .then(() => {
      res.status(200).json({ message: "Cadastro efeituado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

router.put("/edit/:id", async (req, res) => {
  await Jogos.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Jogo alterado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

router.put("/delete/:id", async (req, res) => {
  await Jogos.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Jogo deletado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

module.exports = router;
