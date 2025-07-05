//Implement a tab system (e.g., Home | About | Contact) using `useState`

import React, { useState } from "react";
import "./Tabs.css";
function Tabs(props) {
  const [page, setpage] = useState("");

  return (
    <div className="center-container">
      <div className="box">
        <button onClick={() => setpage("Home")}>Home</button>
        <button onClick={() => setpage("About")}>About</button>
        <button onClick={() => setpage("Contact")}>Contact</button>
        <h1>Welcom to {page}</h1>
      </div>
    </div>
  );
}

export default Tabs;
