const express = require("express");
const router = express.Router();
const Pessoa = require("../model/pessoas");

router.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

router.get("/listar", async (req, res) => {
  await Pessoa.find({})
    .then((pessoas) => {
      console.log(pessoas);
      res.status(200).json(pessoas);
    })
    .catch((err) => {
      res.status(204).json({ message: "Não foi possível encontrar." });
      console.error(err);
    });
});

router.post("/add", async (req, res) => {
  await Pessoa.create(req.body)
    .then(() => {
      res.status(200).json({ message: "Cadastro efeituado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

router.put("/edit/:id", async (req, res) => {
  await Pessoa.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "O usuário foi alterado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro" });
      console.error(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
  await Pessoa.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro!" });
      console.error(err);
    });
});

module.exports = router;
