const treinadores = [
    {id: 1, nome: 'teste', altura: 2, peso: 1, pokemons: []}
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(t => t.id === parseInt(id));
const createTreinador = (nome, altura, peso) => {
    const novoId = treinadores.length ? treinadores[treinadores.length - 1].id + 1 : 1;
    const novoTreinador = { id: novoId, nome, altura, peso, pokemons: []};
    treinadores.push(novoTreinador);
};

const addPokemonToTrainer = (trainerId, pokemonId) => {
    const treinador = getTreinadorById(trainerId);
    if (treinador) {
        treinador.pokemons.push(pokemonId);
    }
};

module.exports = { getTreinadores, getTreinadorById, createTreinador, addPokemonToTrainer};