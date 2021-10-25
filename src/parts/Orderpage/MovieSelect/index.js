import React from "react";
import { useHistory } from "react-router-dom";

import Card from "components/Card";
import Button from "components/UI/Button";

import "./movie-select.scss";

const MovieSelect = (props) => {
  const history = useHistory();

  return (
    <Card className="content__movie--select d-none d-md-flex">
      <h5 className="content__movie--name">{props.title}</h5>
      <Button className="btn btn-change" onClick={() => history.goBack()}>
        Change movie
      </Button>
    </Card>
  );
};

export default MovieSelect;
