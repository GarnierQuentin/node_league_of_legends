import express from 'express';
import { createChampion, getChampions, getSingleChampion } from '../controllers/ChampionsController.js';

const router = express.Router();

router.post('/', createChampion);
router.get('/', getChampions);
router.get('/:id', getSingleChampion);

export default router;