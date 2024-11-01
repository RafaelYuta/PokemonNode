const express = require('express');
const router = express.Router();
const trainerController = require('../controller/treinadorController');

router.get('/', trainerController.getAllTreinadores);
router.get('/treinador/:id', trainerController.getTreinador);
router.post('/', trainerController.criarTreinador);
router.post('/add-pokemon', trainerController.addPokemonToTrainer);
router.get('/treinador/:id/pokemons', trainerController.getTrainerWithPokemons);


module.exports = router;
