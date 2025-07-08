import React, { useEffect, useState } from "react";

function Scroll(props) {
  const [position, setPosition] = useState(0);
  //console.log(position);
  useEffect(() => {
    const handle = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);
  return (
    <div>
      <h1>position : {position}</h1>
      <div style={{ height: "200vh", padding: "20px" }}>
        <h1>Scroll down to see more</h1>
      </div>
    </div>
  );
}

export default Scroll;
