const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/database');
const routes = require('./src/routes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
