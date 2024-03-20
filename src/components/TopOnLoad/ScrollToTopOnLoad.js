import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ScrollToTopOnLoad = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      return () => unlisten();
    });

    if (typeof window != "undefined") window.scrollTo(0, 0);
  }, [history]);
  return null;
};

export default ScrollToTopOnLoad;
