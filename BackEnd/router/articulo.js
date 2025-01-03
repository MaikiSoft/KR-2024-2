import {Router} from 'express';
import {Turso} from '../config/db.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const result = await Turso.execute("SELECT * FROM articulos");
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/:idCap', async (req, res) => {
    // Obtén el valor de `idCap` de los parámetros de la URL
    const idCap = Number(req.params.idCap);

    try {
        const result = await Turso.execute({
            sql: "SELECT * FROM articulos WHERE capitulo_id = ?",
            args: [idCap]
        });
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;