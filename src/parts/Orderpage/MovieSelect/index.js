import React from "react";

import Button from "components/UI/Button";

import "./movie-select.scss";
import Card from "components/Card";

const MovieSelect = () => {
  return (
    <Card className="content__movie--select d-none d-md-flex">
      <h5 className="content__movie--name">Spider-Man: Homecoming</h5>
      <Button className="btn btn-change">Change movie</Button>
    </Card>
  );
};

export default MovieSelect;
