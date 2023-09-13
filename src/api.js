import axios from "axios";

const apiKey = "1dad62d1adbd8506d1f8da2cb3c91d1d";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchTopMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/top_rated`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieById = async (movieId) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieGenres = async (movieId) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${movieId}/genres`, {
      params: {
        api_key: apiKey,
      },
    });
    const genres = response.data.genres.map((genre) => genre.name);
    return genres;
  } catch (error) {
    throw error;
  }
};
