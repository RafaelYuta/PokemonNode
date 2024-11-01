const trainerModel = require('../model/treinadorModel');
const pokemonModel = require('../model/pokemonModel');

const getAllTreinadores = (req, res) => {
    const treinadores = trainerModel.getTreinadores();
    res.render('treinadores', { treinadores });
};

const getTreinador = (req, res) => {
    const treinador = trainerModel.getTreinadorById(req.params.id);
    if (treinador) {
        const pokemons = pokemonModel.getPokemons();
        res.render('treinador', { treinador, pokemons });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};


const criarTreinador = (req, res) => {
    const { nome, altura, peso } = req.body;
    trainerModel.createTreinador(nome, altura, peso);
    res.redirect('/');
};

const addPokemonToTrainer = (req, res) => {
    const { trainerId, pokemonId } = req.body;
    const trainer = trainerModel.getTreinadorById(trainerId);
    const pokemon = pokemonModel.getPokemonById(pokemonId);
    if (!trainer) {
        return res.status(400).send('Treinador não encontrado.');
    }
    if (!pokemon) {
        return res.status(400).send('Pokémon não encontrado.');
    }
    if (!trainer.pokemons.find(p => p.id === pokemon.id)) {
        trainer.pokemons.push(pokemon);
    }
    res.redirect(`/treinadores/treinador/${trainerId}`); 
};

const getTrainerWithPokemons = (req, res) => {
    const treinador = trainerModel.getTreinadorById(req.params.id);
    const pokemons = treinador.pokemons.map(id => pokemonModel.getPokemonById(id));
    if (treinador) {
        res.render('trainerDetail', { treinador, pokemons });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

module.exports = { getAllTreinadores, getTreinador, criarTreinador, addPokemonToTrainer, getTrainerWithPokemons};
