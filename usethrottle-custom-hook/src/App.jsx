import { useEffect, useState } from "react";
import "./App.css";
import useThrottle from "./hooks/use-throttle";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handelResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };


  const throttledHandleResize = useThrottle(handelResize, 500);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []);

  return <div>Window size {windowSize.width} x {windowSize.height}</div>;
}

export default App;
