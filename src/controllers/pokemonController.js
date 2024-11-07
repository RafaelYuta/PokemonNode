const Pokemon = require('../models/pokemon');
const Treinador = require('../models/treinador');

async function createPokemon(req, res) {
  try {
    const { nome, tipo, altura, peso, nivelDePoder, treinadorId } = req.body;
    const pokemon = await Pokemon.create({ nome, tipo, altura, peso, nivelDePoder, treinadorId });
    res.redirect(`/pokemon/${pokemon.id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getPokemon(req, res) {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    res.render('pokemon', { pokemon });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { createPokemon, getPokemon };
