import React from "react";

import Profile from "assets/images/movie6.jpg";

import "./user-profile.scss";

const UserProfile = () => {
  return (
    <>
      <div className="user__profile mt-2 mt-md-0">
        <img src={Profile} alt="Avatar" className="img-cover rounded-circle" />
      </div>
    </>
  );
};

export default UserProfile;
