const pokemonModel = require('../model/pokemonModel');
const trainerModel = require('../model/treinadorModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', {pokemons});
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if(pokemon){
        res.render('pokemon', {pokemon});
    } else {
        res.status(404).send('pokemon n encontrado')
    }
}

const criarPokemon = (req, res) => {
    const { nome, tipo, peso, altura, poder, trainerId } = req.body;
    const trainer = trainerModel.getTreinadorById(trainerId);
    if (!trainer) {
        return res.status(400).send('Treinador não encontrado. É necessário um treinador válido para criar um Pokémon.');
    }
    pokemonModel.createPokemon(nome, tipo, peso, altura, poder);
    res.redirect('/');
};
    

const getAllPokemonsAndTrainers = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    const treinadores = trainerModel.getTreinadores();
    res.render('index', { pokemons, treinadores });
};

module.exports = {getAllPokemons, getPokemon, criarPokemon, getAllPokemonsAndTrainers}