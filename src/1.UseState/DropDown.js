//10. Create a dropdown and display the selected option.

import React, { useState } from "react";

function DropDown(props) {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <h2>Selected : {selected}</h2>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="cpp">C++</option>
        <option value={"React"}>React</option>
        <option value={"DSA"}> DSA</option>
        <option value={"javaScript"}>JavaScript</option>
      </select>
    </div>
  );
}

export default DropDown;
