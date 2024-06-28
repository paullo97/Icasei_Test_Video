import { Request, Response } from 'express';
import '../models/video.model';

export const listFavorites = async (req: Request, res: Response<ListFavoritesResponse>) => {
  const session = req.session;

  if (!session || !session.favorites) {
    return res.status(404).json({ message: 'Nenhum vídeo favorito encontrado', total: 0, favorites: [] });
  }

  const favoritesResponse: ListFavoritesResponse = {
    favorites: session.favorites,
    total: session.favorites.length
  };

  res.json(favoritesResponse);
};