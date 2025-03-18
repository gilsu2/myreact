import axios from "axios";

const header = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
  },
};

export const categories = [
  { category: "Now Playing", fun: getMoviesNowPlaying },
  { category: "Popular", fun: getMoviesPopular },
  { category: "Top Rated", fun: getMoviesTopRated },
  { category: "Upcoming", fun: getMoviesUpcoming },
];

export async function getGenreListMovie() {
  return axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1",
    header
  );
}

export function getMoviesNowPlaying() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    header
  );
}

export function getMoviesPopular() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    header
  );
}

export function getMoviesTopRated() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    header
  );
}

export function getMoviesUpcoming() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    header
  );
}

export function getGenreName(idList) {
  const genreList = JSON.parse(sessionStorage.getItem("GenreList"));
  return idList
    .map((id) => {
      const found = genreList.genres.find((genre) => genre.id == id);
      return found ? found.name : "";
    })
    .filter((name) => name)
    .join(", ");
}
