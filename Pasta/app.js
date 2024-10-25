const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./src/routes/pokemonRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/pokemons', pokemonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${port}`);
});