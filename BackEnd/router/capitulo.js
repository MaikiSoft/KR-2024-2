import { Router } from 'express';
import 'dotenv/config';
import  Turso  from './bd.js';

const router = Router();

// Ruta GET para obtener todos los capítulos
router.get('/', async (req, res) => {
  try {
    const result = await Turso.execute("SELECT * FROM capitulos");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta POST para crear un nuevo capítulo
router.post('/', async (req, res) => {
  const { titulo, numero_articulos, palabras_clave } = req.body;
  
  try {
    const result = await Turso.execute({
      sql: "INSERT INTO capitulos (titulo, numero_articulos, palabras_clave) VALUES (?, ?, ?)",
      args: [titulo, numero_articulos, palabras_clave],
    });
    res.status(201).json({ message: 'Capítulo creado con éxito', result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
