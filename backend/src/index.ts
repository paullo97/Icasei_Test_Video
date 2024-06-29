import express from 'express';
import session from 'express-session';
import './models/session.model';
import { SECRETS, SESSION } from './constants/secrets';
import videosRouter from './routes/videos.router';
import favoritesRouter from './routes/favorites.router';

const app = express();
const port = SECRETS.PORT;

app.use(session(SESSION));
app.use(express.json());
app.use('/videos', videosRouter);
app.use('/favorites', favoritesRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
