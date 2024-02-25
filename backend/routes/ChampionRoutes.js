import express from 'express';
import { createChampion } from '../controllers/ChampionsController.js';

const router = express.Router();

router.post('/', createChampion);

export default router;