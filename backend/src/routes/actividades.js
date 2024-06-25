const express = require('express');
const router = express.Router();
const Actividad = require('../models/actividad');

// Obtener todas las actividades
router.get('/', async (req, res) => {
  try {
    const actividades = await Actividad.find();
    res.json(actividades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
/*
// Agregar una nueva actividad
router.post('/', async (req, res) => {
  const actividad = new Actividad({
    nombre: req.body.nombre,
    calxmin: req.body.calxmin
  });

  try {
    const nuevaActividad = await actividad.save();
    res.status(201).json(nuevaActividad);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Eliminar una actividad por ID
router.delete('/:id', async (req, res) => {
  try {
    const actividad = await Actividad.findById(req.params.id);
    if (!actividad) {
      return res.status(404).json({ message: 'Actividad no encontrada' });
    }

    await actividad.remove();
    res.json({ message: 'Actividad eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
*/

module.exports = router;
