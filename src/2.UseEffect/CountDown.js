import React, { useEffect, useState } from "react";
//11. Implement a countdown timer that clears itself when it reaches zero.

function CountDown(props) {
  const [count, setCount] = useState(30);
  useEffect(() => {
    if (count <= 0) return;
    const id = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [count]);
  return <div>{count > 0 && <h1>Count Down Start : {count}</h1>}</div>;
}

export default CountDown;
