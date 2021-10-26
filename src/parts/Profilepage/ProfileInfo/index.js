import React from "react";

import { ReactComponent as IconMore } from "assets/images/icons/icon-more.svg";
import Profile from "assets/images/movie6.jpg";

import Card from "components/Card";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";

import "./profile-page.scss";

export default function ProfileInfo(props) {
  return (
    <Card className="card__profile">
      <div className="card__profile--info">
        <div className="card__profile--head">
          <p className="text__info">INFO</p>
          <IconMore />
        </div>
        <Image
          className="card__profile--image mx-auto"
          srcImage={Profile}
          altImage="Profile Image"
          imgClass="img-cover rounded-circle"
        />
        <MetaWrapper
          classTitle="data__profile"
          title="Jonas El Rodriguez"
          category="Moviegoers"
          classCategory="data__category"
        />
        <hr className="line w-100" />
      </div>
    </Card>
  );
}
