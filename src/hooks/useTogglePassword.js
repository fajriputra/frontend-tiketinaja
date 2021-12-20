import React, { useState } from "react";

import IconEye from "assets/images/icons/icon-eye.svg";
import IconEyeSlash from "assets/images/icons/icon-eye-slash.svg";

const useTogglePassword = () => {
  const [visible, setVisible] = useState(false);

  const handleToggle = () => setVisible(!visible);

  const Icon = (
    <img
      src={visible ? `${IconEye}` : `${IconEyeSlash}`}
      onClick={handleToggle}
      alt="Eye"
      width={18}
      height={16}
    />
  );

  const inputType = visible ? "text" : "password";

  return [inputType, Icon];
};

export default useTogglePassword;
