import React, { useEffect, useState } from "react";
//1. Log a message every time a specific state variable changes.

function UseEffComp1(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("name : ", name);
  }, [name]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
}

export default UseEffComp1;
