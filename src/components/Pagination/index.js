import React from "react";

import Button from "components/UI/Button";

import "./pagination.scss";

const Pagination = ({ pagination, page, onClick }) => {
  const loopPagination = () => {
    const number = [];

    for (let i = 0; i < pagination.totalPage; i++) {
      number.push(
        <li
          className={["page-item", page === i + 1 ? "active" : ""].join(" ")}
          key={i}
        >
          <Button className="page-link" onClick={onClick}>
            {i + 1}
          </Button>
        </li>
      );
    }

    return number;
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">{loopPagination()}</ul>
    </nav>
  );
};

export default Pagination;
