import React, { useState } from "react";

import IconEyeShow from "assets/images/icons/icon-eye.svg";

const useTogglePassword = () => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => setVisible(!visible);

  const Icon = (
    <img src={visible ? `${IconEyeShow}` : "Hide"} onClick={handleToggle} />
  );

  const inputType = visible ? "text" : "password";

  return [inputType, Icon];
};

export default useTogglePassword;
