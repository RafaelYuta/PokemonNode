const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize