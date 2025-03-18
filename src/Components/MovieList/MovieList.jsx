import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  categories,
  getGenreListMovie,
  getGenreName,
  getMoviesNowPlaying,
} from "./api";
import { getMoviesPopular } from "./api";
import { getMoviesTopRated } from "./api";
import { getMoviesUpcoming } from "./api";
import { ServerRouter } from "react-router-dom";

const Tab = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0px;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #ff69d4;
  }
  &.selected {
    background-color: #32cd23;
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; //repeat(3, 1fr);
  gap: 10px;
`;
const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  color: #333;
  overflow-wrap: break-word;
  word-break: break-all;
`;

function MovieList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(0);

  const IMG_PATH = "https://image.tmdb.org/t/p/original/";
  let genreList = [];

  useEffect(() => {
    getMovies(0);
  }, []);

  // 1. await는 반드시 async 함수안에 사용한다.
  // 2. try~catch구문을 이용하는 것이 좋다.
  async function getMovies(index) {
    try {
      // 장르리스트 요청
      if (!JSON.parse(sessionStorage.getItem("GenreList"))) {
        let response = await getGenreListMovie();
        sessionStorage.setItem("GenreList", JSON.stringify(response.data));
      }

      // 무비리스트 요청
      let response = await categories[index].fun(); // 200 OK
      console.log(response.data);
      setSelectedCat(index);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      // 400,404,500 오류 확인 가능
      console.log(error);
      alert("네트워크 오류로 정상적인 동작이 안되고 있습니다.");
    }
  }

  return (
    <div>
      <h1>MovieList</h1>
      <Tab>
        {categories.map((category, i) => (
          <Button
            key={i}
            onClick={() => getMovies(i)}
            className={i == selectedCat ? "selected" : ""}
          >
            {category.category}
          </Button>
        ))}
      </Tab>
      <Container>
        {loading ? (
          <p>로딩중...</p>
        ) : (
          data.results.map((movie) => (
            <Card key={movie.id}>
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 :{getGenreName(movie.genre_ids)} </Text>
              <hr />
              <Text>{movie.overview}</Text>
            </Card>
          ))
        )}
      </Container>
    </div>
  );
}

export default MovieList;
