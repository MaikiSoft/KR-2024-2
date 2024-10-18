import { Router } from 'express';
import { createClient } from '@libsql/client';
import 'dotenv/config';

const router = Router();

// Obtener cliente para la base de datos
const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Ruta GET para obtener todos los usuarios
router.get('/', async(req, res) => {
  const email = req.query.email;
    try {
    const result = await turso.execute("SELECT * FROM usuarios WHERE correo = ?", [email]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;