import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import { BtnGroups } from "./BtnGroups";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies, handleOnDelete }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    //update the local state
    setDisplay(movies);
  }, [movies]);
  // render all teh time -> with out dependency array
  // render one time and only []
  //render if some specific props updates [variable]

  const haldleOnFilter = (str) => {
    str === "all"
      ? setDisplay(movies)
      : setDisplay(movies.filter((item) => item.cat === str));
  };

  return (
    <div className="bg-dark p-3 rounded">
      <Row className="mt-5 ">
        <Col>
          <BtnGroups haldleOnFilter={haldleOnFilter} />
          <div className="py-2">{display.length} Movies found!</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-around flex-wrap ">
          {display.map((item) => (
            <MovieCard
              key={item.imdbID}
              movie={item}
              showDelete={true}
              func={handleOnDelete}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
};
