const mongoose = require('mongoose');

const comidaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  calxgramo: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Comida', comidaSchema);
