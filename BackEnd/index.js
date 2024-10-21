import express from 'express';
import dotenv from 'dotenv';
import capitulosRoutes from './router/capitulo.js';
import loginRoutes from './router/usuario.js';
import cors from 'cors' // Importar las rutas

// Configurar dotenv para cargar las variables de entorno
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de capítulos
app.use('/capitulos', capitulosRoutes);
app.use('/login', loginRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});