import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Upcomming = () => {
  const [movieList, setMovieList] = useState([]);

  const UpcommingMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=9c9507db04f409d6558ccc85828c568d"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results.slice(0, 4)));
  };

  useEffect(() => {
    UpcommingMovies();
  }, []);

  return (
    <Container>
      <UpcommingHeader to="/upcomming">
        <h4>Upcomming</h4>
      </UpcommingHeader>
      <Content>
        {movieList.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <Overlay>
                <h3>{movie.title}</h3>
                <p>Overview: {movie.overview}</p>
                <p>Popularity: {movie.popularity}</p>
              </Overlay>
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const UpcommingHeader = styled(Link)`
  h4 {
    cursor: pointer;
   
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 10px;

  h3 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 5px;
    text-align: center;
  }

  ${Wrap}:hover & {
    opacity: 1;
  }
`;

export default Upcomming;
