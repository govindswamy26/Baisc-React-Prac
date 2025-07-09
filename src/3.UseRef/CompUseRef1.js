//2. Track how many times a component has rendered using useRef.

import React, { useRef, useState } from "react";

function CompUseRef1(props) {
  const ref = useRef(0);
  const [istrue, setistrue] = useState(false);
  ref.current++;
  return (
    <div>
      {ref.current}
      <button onClick={() => setistrue((prev) => !prev)}>CLick</button>
    </div>
  );
}

export default CompUseRef1;
