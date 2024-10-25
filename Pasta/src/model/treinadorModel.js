const treinadores = [
    {id: 1, nome: 'corno', tipo: 'a', peso: 2, altura: 10, poder: 5}
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo, peso, altura, poder) => {
    const novoId = pokemons.length ? pokemons[pokemons.length - 1].id + 1 : 1; // Garante um novo ID
    const novoPokemon = { id: novoId, nome, tipo, peso, altura, poder };
    pokemons.push(novoPokemon);
};

module.exports = {getPokemons, getPokemonById, createPokemon}