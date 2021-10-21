import React from "react";

import Button from "components/UI/Button";

import "./pagination.scss";

const Pagination = () => {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item active" aria-current="page">
          <Button className="page-link" type="link" href="#">
            1
          </Button>
        </li>
        <li className="page-item">
          <Button className="page-link" type="link" href="#">
            2
          </Button>
        </li>
        <li className="page-item">
          <Button className="page-link" type="link" href="#">
            3
          </Button>
        </li>
        <li className="page-item">
          <Button className="page-link" type="link" href="#">
            4
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
