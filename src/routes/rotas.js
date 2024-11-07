const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');
const pokemonController = require('../controllers/pokemonController');

router.get('/treinadores', treinadorController.listTreinadores);
router.get('/treinador/:id', treinadorController.getTreinador);
router.get('/treinador/create', (req, res) => res.render('createTreinador'));
router.post('/treinador', treinadorController.createTreinador);

router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/pokemon/create', (req, res) => res.render('createPokemon'));
router.post('/pokemon', pokemonController.createPokemon);

module.exports = router;
