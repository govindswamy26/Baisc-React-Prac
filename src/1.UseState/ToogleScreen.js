//15. Build a dark/light theme toggle and update page style accordingly.

import React, { useState } from "react";
import offImg from "./off.png";
import onImg from "./on.png";
function ToogleScreen(props) {
  const [change, setChange] = useState(false);

  return (
    <div
      style={{
        backgroundColor: change ? "black" : "white",
        color: change ? "#fff" : "#000",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <button
        onClick={() => setChange((prev) => !prev)}
        style={{ border: "none", background: "transparent" }}
      >
        <img src={change ? onImg : offImg} alt="toggle" width="100" />
      </button>
    </div>
  );
}

export default ToogleScreen;
