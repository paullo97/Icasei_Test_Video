import { Request, Response } from 'express';

export const searchVideos = async (req: Request, res: Response) => {
  const searchTem = req.query.term as string;

  res.json({ message: `${searchTem}`});
};

export const playVideo = async (req: Request, res: Response) => {
  // Lógica para reproduzir um vídeo
};

export const toggleFavorite = async (req: Request, res: Response) => {
  const { videoId } = req.params;
  const session = req.session;

  if (!Array.isArray(session.favorites)) {
    session.favorites = [];
  }

  const index = session.favorites.indexOf(videoId);

  if (index === -1) {
    session.favorites.push(videoId);
    res.json({ message: 'Vídeo adicionado aos favoritos' });
  } else {
    session.favorites.splice(index, 1);
    res.json({ message: 'Vídeo removido dos favoritos' });
  }
};