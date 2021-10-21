import React from "react";

import HeroImage from "assets/images/hero-image.png";

import Image from "components/Image";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="hero__content">
              <div className="hero__content--text">
                <p>Nearest Cinema, Newest Movie</p>
                <h1>Find out now!</h1>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Image
              className="hero__content--image"
              altImage="Hero Image"
              imgClass="img-contain"
              srcImage={HeroImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
