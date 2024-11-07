const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pokemon = require('./pokemon');

const Treinador = sequelize.define('Treinador', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  altura: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: false
});

Treinador.hasMany(Pokemon, {
  foreignKey: 'treinadorId',
  allowNull: false
});

Pokemon.belongsTo(Treinador, {
  foreignKey: 'treinadorId',
  allowNull: false
});

module.exports = Treinador;