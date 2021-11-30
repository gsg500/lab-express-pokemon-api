const express = require("express");
const regras = require("./pokemon/regras");
const search = require("./pokemon/search");

const PORT = 4000;
const app = express();

// -- Define your route listeners here! --
app.use(express.json());
app.use("/regras", regras);
app.use("/search", search);
app.listen(PORT, () => { console.log(`Server rodando na porta ${PORT}`); });

