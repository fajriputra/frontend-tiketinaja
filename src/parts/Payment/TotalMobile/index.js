import React from "react";
import { formatRp } from "helpers/formatRp";

import "./total-mobile.scss";

const TotalMobile = (props) => {
  const { schedule, seats } = props;

  return (
    <div className="d-block d-md-none bg-white">
      <div
        className="
            total__payment--mobile
            d-flex
            justify-content-between
            align-items-center
          "
      >
        <p className="total__payment--text">Total Payment</p>
        <p className="total__payment--price">
          {formatRp(
            seats.length === 0
              ? schedule?.price
              : schedule?.price * seats.length
          )}
        </p>
      </div>
    </div>
  );
};

export default TotalMobile;
