import express from 'express';
import * as favoritesController from '../controllers/favorites.controller';

const router = express.Router();

router.get('/', favoritesController.listFavorites);

export default router;
