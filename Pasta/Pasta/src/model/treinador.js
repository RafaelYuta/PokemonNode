class treinador {
    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.pokemons = [];
    }

    adicionarPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
}

module.exports = treinador;