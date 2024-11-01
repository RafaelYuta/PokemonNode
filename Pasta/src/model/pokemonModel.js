const pokemons = [{ id: 1, nome: 'pokemon', tipo: 'agua', peso: 2, altura: 10, poder: 5 }];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo, peso, altura, poder, trainerId) => {
    const novoId = pokemons.length ? pokemons[pokemons.length - 1].id + 1 : 1;
    const novoPokemon = { id: novoId, nome, tipo, peso, altura, poder, trainerId };
    pokemons.push(novoPokemon);
};

module.exports = { getPokemons, getPokemonById, createPokemon };