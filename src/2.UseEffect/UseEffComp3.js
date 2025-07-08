//3. Create a live character count for an input field using useEffect.

import React, { useState, useEffect } from "react";

function UseEffComp3() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(name.length);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Character Count: {count}</p>
    </div>
  );
}

export default UseEffComp3;
