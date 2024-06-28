interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
}

interface ListFavoritesResponse {
    message?: string;
    total: number;
    favorites: string[];
}