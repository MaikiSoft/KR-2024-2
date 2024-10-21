import { Router } from 'express';
import { createClient } from '@libsql/client';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import 'dotenv/config';

const router = Router();

// Obtener cliente para la base de datos
const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const JWT_SECRET = process.env.JWT_SECRET;

// Ruta GET para obtener todos los usuarios
router.post('/', async (req, res) => {
  const { correo, password } = req.body; // Asegúrate de que el nombre del campo sea 'correo'

  try {
    console.log("Correo:", correo); // Verifica el correo
    console.log("Contraseña:", password); // Verifica la contraseña
    if (!correo || !password) {
      return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
    }
    const result = await turso.execute(`SELECT * FROM usuarios WHERE correo = '${correo}'`);

    const user = result.rows[0];
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña aquí
    const isPasswordValid = password === user.password; // Ajusta esto si usas bcrypt
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = jwt.sign({ id: user.id, correo: user.correo }, JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});

export default router;