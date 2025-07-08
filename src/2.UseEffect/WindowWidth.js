//4. Track and display the current window width (resize listener).

import React, { useEffect, useState } from "react";

function WindowWidth(props) {
  const [widthc, setWidthc] = useState(window.innerWidth);
  const [heightc, setHeightc] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setWidthc(window.innerWidth);
      setHeightc(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1>width : {widthc}</h1>
      <h1>height : {heightc}</h1>
    </div>
  );
}

export default WindowWidth;
