import { createClient } from '@libsql/client';
console.log(process.env.TURSO_DATABASE_URL)
const Turso = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
  
export default Turso;