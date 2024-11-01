const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./src/routes/pokemonRoutes');
const treinadorRoutes = require('./src/routes/treinadorRoutes');
const pokemonController = require('./src/controller/pokemonController');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/view');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/pokemons', pokemonRoutes);
app.use('/treinadores', treinadorRoutes);
app.get('/', pokemonController.getAllPokemonsAndTrainers);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
