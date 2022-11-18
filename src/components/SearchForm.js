import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { fetchData } from "../utilies/axiosHelpers";
import { randomChar } from "../utilies/randomGenerator";
import { MovieCard } from "./MovieCard";

export const SearchForm = ({ addMovieToList }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    //generate random char
    const char = randomChar();

    // and call fetch api
    getMovieFromApi(char);
  }, []);

  const getMovieFromApi = async (str) => {
    try {
      const resp = await fetchData(str);
      console.log(resp.data);
      if (resp.data.Response === "True") {
        setMovie(resp.data);
      } else {
        setError(resp.data.Error);
      }
    } catch (error) {
      console.log(error);
      setError("Error occured, please try again later");
    }
  };

  // get the form data while typing
  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  // when form is submited, call the api with the serched data and get the movie details

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    error && setError("");
    movie.imdbID && setMovie({});
    getMovieFromApi(form);
  };

  const handleOnAddToList = (cat) => {
    console.log(cat);
    addMovieToList({ ...movie, cat });
    setMovie({});
    setForm("");
  };

  const handleOnClear = () => {
    setMovie({});
  };
  return (
    <Form className="py-3" onSubmit={handleOnSubmit}>
      <Row>
        <Col></Col>
        <Col>
          <Form.Control
            value={form}
            onChange={handleOnChange}
            placeholder="Movie name ..."
            required
          />
        </Col>
        <Col>
          <Button type="submit"> Search</Button>
        </Col>
      </Row>
      <Row className="py-3 justify-content-center">
        {movie.imdbID && (
          <MovieCard
            movie={movie}
            func={handleOnAddToList}
            handleOnClear={handleOnClear}
          />
        )}
        {error && <Alert variant="danger">{error}</Alert>}
      </Row>
    </Form>
  );
};
