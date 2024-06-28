import { Request, Response } from 'express';

export const searchVideos = async (req: Request, res: Response) => {
  // Lógica para buscar vídeos na API do YouTube
  const searchTem = req.query.term as string;

  res.json({ message: `${searchTem} - 3`}) 
};

export const playVideo = async (req: Request, res: Response) => {
  // Lógica para reproduzir um vídeo
};

export const toggleFavorite = async (req: Request, res: Response) => {
  // Lógica para adicionar/remover um vídeo dos favoritos
};
