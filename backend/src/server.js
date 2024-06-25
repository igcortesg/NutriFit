const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Importar las rutas de autenticación

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb+srv://igcortes8:8x5Sp7yuKP07LFrd@cluster0.wkyspx9.mongodb.net/NutriFit?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Rutas
app.use('/api/auth', authRoutes); // Usar las rutas de autenticación
const comidasRouter = require('./routes/comidas');
app.use('/api/comidas', comidasRouter);
const actividadesRouter = require('./routes/actividades');
app.use('/api/actividades', actividadesRouter);


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
