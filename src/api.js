import axios from "axios";

const apiKey = "YOUR_API_KEY"; // Replace with your TMDB API key
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
