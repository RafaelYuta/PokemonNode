const Treinador = require('../models/treinador');
const Pokemon = require('../models/pokemon');

async function createTreinador(req, res) {
  try {
    const { nome, altura, peso } = req.body;
    const treinador = await Treinador.create({ nome, altura, peso });
    res.redirect(`/treinador/${treinador.id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getTreinador(req, res) {
  try {
    const treinador = await Treinador.findByPk(req.params.id, {
      include: Pokemon
    });
    res.render('treinador', { treinador });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function listTreinadores(req, res) {
  try {
    const treinadores = await Treinador.findAll();
    res.render('listTreinadores', { treinadores });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { createTreinador, getTreinador, listTreinadores };
