import express from 'express';
import { createChampion, getChampions } from '../controllers/ChampionsController.js';

const router = express.Router();

router.post('/', createChampion);
router.get('/', getChampions);

export default router;