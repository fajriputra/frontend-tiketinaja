import React from "react";
import { useHistory } from "react-router-dom";

import ArrowBottom from "assets/images/icons/icon-arrow-bottom.svg";
import ArrowRight from "assets/images/icons/icon-arrow-right.svg";

import Button from "components/UI/Button";
import Card from "components/Card";
import Image from "components/Image";

import "./seats.scss";

const Seats = () => {
  const history = useHistory();

  return (
    <>
      <Card className="content__seat--wrapper">
        <Card className="content__seat">
          <p className="content__seat--screen d-none d-md-block text-center">
            Screen
          </p>
          <hr className="line seat w-100" />

          <div className="content__seat--box text-center">
            <h3>seats will be made soon</h3>
          </div>

          <div className="content__seat--key">
            <h5 className="content__seat--text">Seating key</h5>
            <div className="content__mobile-wrapper d-flex d-md-none mb-3">
              <div className="d-flex align-items-center me-3">
                <Image
                  className="content__mobile--image"
                  srcImage={ArrowBottom}
                  altImage="Icon Arrow Bottom"
                  imgClass="img-cover"
                />
                <p className="content__mobile--text">A - G</p>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  className="content__mobile--image"
                  srcImage={ArrowRight}
                  altImage="Icon Arrow Right"
                  imgClass="img-cover"
                />
                <p className="content__mobile--text">A - G</p>
              </div>
            </div>

            <div className="content__seat--available">
              <div className="choose__seat--info">
                <div className="box__available"></div>
                <p className="choose__seat--text mb-0">Available</p>
              </div>
              <div className="choose__seat--info">
                <div className="box__selected"></div>
                <p className="choose__seat--text mb-0">Selected</p>
              </div>
              <div className="choose__seat--info">
                <div className="box__love"></div>
                <p className="choose__seat--text mb-0">Love nest</p>
              </div>
              <div className="choose__seat--info">
                <div className="box__sold"></div>
                <p className="choose__seat--text mb-0">Sold</p>
              </div>
            </div>
          </div>
        </Card>
      </Card>
      <div class="button__wrapper">
        <Button
          className="btn btn__action change"
          onClick={() => history.goBack()}
        >
          Change your movie
        </Button>
        <Button
          className="btn btn__action checkout"
          onClick={() => history.push("/payment")}
        >
          Checkout now
        </Button>
      </div>
    </>
  );
};

export default Seats;
