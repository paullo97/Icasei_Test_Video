import express from 'express';
import * as videosController from '../controllers/videos.controller';

const router = express.Router();

router.get('/search', videosController.searchVideos);
router.get('/play/:videoId', videosController.playVideo); // Maybe is not request this to backend, verify in front end if possible
router.post('/toggle-favorite/:videoId', videosController.toggleFavorite);

export default router;
