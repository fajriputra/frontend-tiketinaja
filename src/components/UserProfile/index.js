import React from "react";

import "./user-profile.scss";

const UserProfile = (props) => {
  return (
    <>
      <div
        className={["user__profile mt-2 mt-md-0", props.className].join(" ")}
      >
        <img
          src={props.srcImage}
          alt="Avatar"
          className="img-cover rounded-circle"
        />
      </div>
    </>
  );
};

export default UserProfile;
