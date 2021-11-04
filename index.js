const express = require("express");
const app = express();

app.use(express.json());

const conn = require("./model/conn/index");

conn();

const port = 3000;

const pessoasRouter = require("./routers/pessoas");
app.use("/pessoas", pessoasRouter);

const objetosRouter = require("./routers/jogos");
app.use("/jogos", objetosRouter);

const musicasRouter = require("./routers/musicas");
app.use("/musicas", musicasRouter);

const filmesRouter = require("./routers/filmes");
app.use("/filmes", filmesRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
