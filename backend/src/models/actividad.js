const mongoose = require('mongoose');

const actividadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  calxmin: {
    type: Number,
    required: true
  }
}, { collection: 'actividades' });

module.exports = mongoose.model('Actividad', actividadSchema);
