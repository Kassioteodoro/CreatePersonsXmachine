const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: Number,
  nome: String,
  raça: String,
  idade: Number,
  vida: Number,
  magia: Number,
  xp: Number,
  imagem: String,
  historia: String,
  atributos: {
      força: Number,
      habilidade: Number,
      resistencia: Number,
      inteligencia: Number,
      armadura: Number,
  },
  habilidades: [String],
  magias: [String],
  vantagens: [String],
  desvantagens: [String],
  equipamento: [String],
});

const Person = mongoose.model('Person', schema);

module.exports = Person;