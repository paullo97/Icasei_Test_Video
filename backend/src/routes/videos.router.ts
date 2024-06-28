import express from 'express';
import * as videosController from '../controllers/videos.controller';

const router = express.Router();

router.get('/search', videosController.searchVideos);
router.get('/play/:videoId', videosController.playVideo);
router.post('/toggle-favorite/:videoId', videosController.toggleFavorite);

export default router;
