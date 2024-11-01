const express = require('express');
const router = express.Router();
const pokemonController = require('../controller/pokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.post('/', pokemonController.criarPokemon);

module.exports = router;