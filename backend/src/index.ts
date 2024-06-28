import express from 'express';
import session from 'express-session';
import './models/session.model';
import { SECRETS, SESSION } from './constants/secrets';
import videosRouter from './routes/videos.router';
import favoritesRouter from './routes/favorites.router';

const app = express();
const port = SECRETS.PORT;

app.use(session(SESSION));

// app.get('/', (req, res) => {
//   if (req.session.views) {
//     req.session.views++;
//     res.send(`Você visitou esta página ${req.session.views} vezes.`);
//   } else {
//     req.session.views = 1;
//     res.send('Bem-vindo à sua primeira visita!');
//   }
// });
app.use(express.json());

// Rotas
app.use('/videos', videosRouter);
app.use('/favorites', favoritesRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
