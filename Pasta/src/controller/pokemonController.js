const pokemonModel = require('../model/pokemonModel');

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
    const {nome, tipo, peso, altura, poder} = req.body;
    pokemonModel.createPokemon(nome, tipo, peso, altura, poder);
    res.redirect('/');
}

module.exports = {getAllPokemons, getPokemon, criarPokemon}