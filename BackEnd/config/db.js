import { createClient } from "@libsql/client";
import dotenv from 'dotenv';
dotenv.config();

export const Turso = createClient({
  url: process.env.TURSO_DATABASE_URL, // La URL de tu base de datos en la nube
  authToken: process.env.TURSO_AUTH_TOKEN, // El token de autenticación
});
