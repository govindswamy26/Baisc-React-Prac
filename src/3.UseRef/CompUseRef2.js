//3. Show previous value of a state variable using useRef.

import React, { useEffect, useRef, useState } from "react";

function CompUseRef2(props) {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    ref.current = count;
  }, [count]);
  return (
    <div>
      <h1>Random var of state : {count}</h1>
      <h2>prev value of useRef :{ref.current} </h2>
      <button onClick={() => setCount(Math.floor(Math.random() * 100))}>
        Change Count
      </button>
    </div>
  );
}

export default CompUseRef2;
