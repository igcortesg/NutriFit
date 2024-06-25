const express = require('express');
const router = express.Router();
const Comida = require('../models/comida');

// Obtener todas las comidas
router.get('/', async (req, res) => {
  try {
    const comidas = await Comida.find();
    console.log(comidas);
    res.json(comidas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
/*
// Agregar una nueva comida
router.post('/', async (req, res) => {
  const comida = new Comida({
    nombre: req.body.nombre,
    calxgramo: req.body.calxgramo
  });

  try {
    const nuevaComida = await comida.save();
    res.status(201).json(nuevaComida);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una comida por ID
router.delete('/:id', async (req, res) => {
    try {
      const comida = await Comida.findById(req.params.id);
      if (!comida) {
        return res.status(404).json({ message: 'Comida no encontrada' });
      }
  
      await comida.remove();
      res.json({ message: 'Comida eliminada' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});
*/

module.exports = router;
