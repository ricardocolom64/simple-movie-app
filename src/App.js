import { React, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Button,
  Navbar,
  Container,
  Row,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import MovieList from "./components/MovieList";
import SearchBox from "./components/Searchbox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [page, setPage] = useState(1);
  const incrementPage = () => {
    if (page < 10)
      setPage(page + 1);
  };

  const decrementPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&page=${page}&type=movie&apikey=f5d5a930`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      console.log(url);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue, page]);

  return (
    <div className="App">
      <nav className="navbar justify-content-center">
        <div className="navbar-content d-flex flex-column align-items-center m-2">
          <div className="navbar-brand m-2 p-0">
            <a>Movie Lookup</a>
          </div>
          <div className="navbar-right-side d-flex flex-row w-100 m-2">
            <SearchBox setSearchValue={setSearchValue} setPage={setPage} />
          </div>
        </div>
      </nav>
      <Container fluid className="movies my-2">
        <Row className="d-flex flex-row justify-content-center m-2">
          <MovieList movies={movies} />
        </Row>
      </Container>
      <nav className="pagebar">
        <div className="pagebar-content">
          <Button className="btn btn-light" onClick={decrementPage}>
            <i className="fa fa-arrow-left" /> Prev
          </Button>
          <a>{page}</a>
          <Button className="btn btn-light" onClick={incrementPage}>
            Next <i className="fa fa-arrow-right" />
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default App;
