import axios from "axios";
import type { TMDBResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function fetchMovies(
  query: string,
  page: number = 1,
): Promise<TMDBResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<TMDBResponse>(BASE_URL, {
    params: {
      query,
      page,
      include_adult: false,
      language: "en-US",
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
