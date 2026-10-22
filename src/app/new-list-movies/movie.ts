<<<<<<< Updated upstream
export interface Movie{
  title: String;
  category: String;
  year: String;
  id: Number;
  image: string;
=======
export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  // list only
  genre_ids?: number[];

  // details only
  tagline?: string;
  runtime?: number;
  genres?: Genre[];
  budget?: number;
  revenue?: number;
  status?: string;
  homepage?: string;
  imdb_id?: string;
>>>>>>> Stashed changes
}
