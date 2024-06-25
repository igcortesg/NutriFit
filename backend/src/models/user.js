const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de usuario
const UserSchema = new Schema({
  contrasena: { type: String, required: true },
  rut: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  altura: { type: Number, required: true },
  peso: { type: Number, required: true },
  fechaNacimiento: { type: Date, required: true },
  region: { type: String, required: true },
  comuna: { type: String, required: true },
  role: { type: String, default: 'usuario' }
});

// Exportar el modelo de usuario
module.exports = mongoose.model('User', UserSchema);
