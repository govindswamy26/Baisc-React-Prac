import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useRef, useState } from "react";
// 5. Build a stop-watch that starts/stops on button click using useRef for interval tracking.

function CompUseRef4(props) {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);
  let ref = useRef(null);
  useEffect(() => {
    if (start)
      ref.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    if (!start) {
      clearInterval(ref.current);
    }
    return () => {
      clearInterval(ref.current);
    };
  }, [start]);
  return (
    <div>
      <h1>Timer : {count}</h1>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
    </div>
  );
}

export default CompUseRef4;
