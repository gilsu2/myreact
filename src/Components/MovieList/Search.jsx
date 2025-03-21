import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./MovieList";
import { Container } from "./MovieList";
import { Card } from "./MovieList";
import { Img } from "./MovieList";
import { Text } from "./MovieList";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getGenreName,
  IMG_PATH,
  searchMoviesByKeyword,
  getGenreListMovie,
} from "./api";
import image from "./img/image.png";

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 500px;
  height: 40px;
`;

const H3 = styled.h3`
  margin-bottom: 20px;
`;

function Search() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [genreList, setGenreList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); //url로 부터 정보를 얻기위한 함수
  const urlKeyword = new URLSearchParams(location.search).get("keyword");

  useEffect(() => {
    if (urlKeyword) {
      searchMovies(urlKeyword);
    } else {
      setData(null);
      setLoading(true);
    }
  }, [urlKeyword]);

  function handleChange(value) {
    setKeyword(value);
  }

  async function searchMovies(value) {
    try {
      // 장르리스트 요청
      let response = await getGenreListMovie();
      if (!response || response.length === 0) {
        console.log("장르 데이터를 가져오지 못했습니다.");
        return;
      }
      console.log(response);
      setGenreList(response);
      response = await searchMoviesByKeyword(value);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("네트워크 오류로 정상적인 동작이 안되고 있습니다");
    }
  }

  return (
    <div>
      <SearchBox>
        <Input
          type="text"
          value={keyword}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="검색어를 입렫해주세요"
        />
        <Button
          onClick={() => {
            keyword
              ? navigate(`/search?keyword=${keyword}`)
              : alert("검색어를 입력해주세요");
          }}
        >
          검색
        </Button>
      </SearchBox>
      <H3>{keyword ? `${keyword}로 검색한 결과 리스트` : <p>search</p>}</H3>

      <Container>
        {loading
          ? "대기중..."
          : data.results.map((movie) => (
              <Card
                key={movie.id}
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <Img
                  src={movie.poster_path ? IMG_PATH + movie.poster_path : image}
                ></Img>
                <Text>타이틀 :{movie.title}</Text>
                <Text>장르 : {getGenreName(genreList, movie.genre_ids)}</Text>
                <hr />
                <Text>{movie.overview}</Text>
              </Card>
            ))}
      </Container>
    </div>
  );
}

export default Search;
