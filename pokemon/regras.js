const OsPokemons = require("../data");
const express = require("express");
const app = express();
let PokemonDelet;

const regras = app.get("/", (req, res) => { res.status(200).json(OsPokemons);});

//--
app.get("/pokemon/:id", (req, res) => {
  const indexToSubstitute = OsPokemons.findIndex((currentPost) => {
    console.log(currentPost.id == req.params.id)
    return currentPost.id == req.params.id;
  });
  
   res.status(200).json({ ...OsPokemons[indexToSubstitute] });
});
//--
app.post("/", (req, res) => {
 OsPokemons.push({ id: OsPokemons.length + 1, ...req.body });
 return res.status(201).json({ ...OsPokemons[OsPokemons.length - 1] });
});
//--
app.delete("/:id", (req, res) => {
  const indexToSubstitute = OsPokemons.findIndex((CurrPokemon) => {
   return CurrPokemon.id === parseInt(req.params.id);
  });
  PokemonDelet = OsPokemons[indexToSubstitute].name;
  OsPokemons.splice([indexToSubstitute], 1);
  res.status(200).json(`Registro Excluido ${PokemonDelet}`);
 });
//--
app.put("/:id", (req, res) => {
 const indexToSubstitute = OsPokemons.findIndex((CurrPokemon) => {
  return CurrPokemon.id === parseInt(req.params.id);
  });
  OsPokemons[indexToSubstitute] = {
   ...OsPokemons[indexToSubstitute],
   ...req.body,
  };
  res.status(200).json({ ...OsPokemons[indexToSubstitute] });
});
//--
module.exports = regras;
