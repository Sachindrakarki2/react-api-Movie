import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export const BtnGroups = ({ haldleOnFilter }) => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button onClick={() => haldleOnFilter("all")} variant="primary">
        All
      </Button>
      <Button onClick={() => haldleOnFilter("happy")} variant="danger">
        Happy
      </Button>
      <Button onClick={() => haldleOnFilter("lazy")} variant="warning">
        Lazy
      </Button>
    </ButtonGroup>
  );
};
