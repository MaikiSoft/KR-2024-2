import { Router } from 'express';
import { Turso } from '../config/db.js';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
import 'dotenv/config';

const router = Router();


const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (user) => {
  const payload = {
    id: user.id,
    correo: user.correo,
    isAdmin: user.isAdmin,
    carrera: user.carrera,
  }
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
};

// Ruta GET para obtener todos los usuarios
router.post('/', async (req, res) => {
  const { correo, password } = req.body; 

  try {
    if (!correo || !password) {
      return res.status(400).json({ message: 'Correo y contraseña son requeridos' });
    }
    const result = await Turso.execute(`SELECT * FROM usuarios WHERE correo = '${correo}'`);

    const user = result.rows[0];
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    
    const isPasswordValid = password === user.password;
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});

export default router;