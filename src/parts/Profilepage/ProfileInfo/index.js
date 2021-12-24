import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as IconMore } from "assets/images/icons/icon-more.svg";
import axios from "helpers/axios";
import Card from "components/Card";
import Image from "components/Image";
import MetaWrapper from "components/MetaWrapper";
import Button from "components/UI/Button";
import { apiHost } from "config";
import { getDataUser } from "store/user/action";
import { toast } from "react-toastify";

import "./profile-page.scss";

export default function ProfileInfo(props) {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const target = useRef(null);
  const [avatar, setAvatar] = useState({ avatar: null });

  const handleImage = () => {
    if (!avatar.avatar) {
    } else {
      const formData = new FormData();

      for (const data in avatar) {
        formData.append(data, avatar[data]);
      }

      axios
        .patch("/user/avatar", formData)
        .then((res) => {
          toast.success(res.data.message);

          dispatch(getDataUser());
        })
        .catch(
          (err) =>
            err.response.data.message && toast.error(err.response.data.message)
        );
    }
  };

  useEffect(() => {
    handleImage();
  }, [avatar]);

  return (
    <Card className="card__profile">
      <div className="card__profile--info">
        <div className="card__profile--head">
          <p className="text__info">INFO</p>
          <IconMore />
        </div>
        <div className="wrapper-image-user">
          <Image
            className="card__profile--image mx-auto"
            srcImage={
              userData.avatar
                ? `${apiHost}/uploads/user/${userData.avatar}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
            altImage={`${userData.firstName} ${userData.lastName}`}
            imgClass="img-cover rounded-circle"
          />
          <input
            type="file"
            name="avatar"
            style={{ display: "none" }}
            ref={target}
            onChange={(e) =>
              setAvatar({ ...avatar, avatar: e.target.files[0] })
            }
          />
        </div>

        <MetaWrapper
          classTitle="data__profile"
          title={`${userData.firstName || ""} ${userData.lastName || ""}`}
          category="Moviegoers"
          classCategory="data__category"
        />

        <div className="text-center">
          <Button
            className="btn mb-3"
            isPrimary
            onClick={() => target.current.click()}
          >
            Choose photo
          </Button>
        </div>

        <hr className="line w-100" />
      </div>
    </Card>
  );
}
