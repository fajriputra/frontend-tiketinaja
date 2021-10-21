import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useScrollTop = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [history.location.key]);
};

export default useScrollTop;
