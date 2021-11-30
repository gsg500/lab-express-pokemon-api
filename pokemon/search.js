const OsPokemons = require("../data");
const express = require("express");
const app = express();

  const search = app.get("/", (req, res, next) => {
    const filterPokemon = OsPokemons.filter((CurrPokemon) => {
        return (
        CurrPokemon.name === req.query.name ||
        CurrPokemon.types.includes(req.query.types)
        );
    });
    res.status(200).json(filterPokemon);
  });

module.exports = search;