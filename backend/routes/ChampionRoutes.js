import express from 'express';
import { createChampion, getChampions, getSingleChampion, updateChampion } from '../controllers/ChampionsController.js';

const router = express.Router();

router.post('/', createChampion);
router.get('/', getChampions);
router.get('/:id', getSingleChampion);
router.put('/:id', updateChampion);

export default router;