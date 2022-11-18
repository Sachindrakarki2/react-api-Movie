import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";

import { Title } from "./components/Title";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovieToList = (movieObj) => {
    const newArg = movies.filter((item) => item.imdbID !== movieObj.imdbID);

    setMovies([...newArg, movieObj]);
  };

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this movie")) {
      setMovies(movies.filter((item) => item.imdbID !== id));
    }
  };

  return (
    <div className="wrapper ">
      <Container>
        <Title />
        {/* form */}
        <SearchForm addMovieToList={addMovieToList} />

        {/* movie List */}
        <MovieList movies={movies} handleOnDelete={handleOnDelete} />
      </Container>
    </div>
  );
}

export default App;
