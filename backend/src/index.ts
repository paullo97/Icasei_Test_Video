import express from 'express';
import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    views: number;
  }
}

const app = express();
const port = 3000;

app.use(session({
  secret: 'segredoSuperSecreto',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Você visitou esta página ${req.session.views} vezes.`);
  } else {
    req.session.views = 1;
    res.send('Bem-vindo à sua primeira visita!');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
