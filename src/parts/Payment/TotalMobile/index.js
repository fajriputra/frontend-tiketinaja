import React from "react";

import "./total-mobile.scss";

const TotalMobile = () => {
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
        <p className="total__payment--price">$30.00</p>
      </div>
    </div>
  );
};

export default TotalMobile;
