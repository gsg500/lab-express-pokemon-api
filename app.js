const express = require("express");
const regras = require("./pokemon/regras.js");
const search = require("./pokemon/search.js");

const PORT = 4000;
const OsPokemons = require("./data");
const app = express();

// -- Define your route listeners here! --

app.use(express.json());
app.use("/regras", regras, SearchIDxPokemon);
app.use("/search", search);