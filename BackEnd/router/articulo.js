import {Router} from 'express';
import Turso from './bd.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const result = await Turso.execute("SELECT * FROM articulos");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;