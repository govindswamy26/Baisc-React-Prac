//8. Prevent re-renders of a counter by using useRef instead of useState.

import React, { useRef } from "react";

function CounterRerender(props) {
  let count = useRef(0);
  function handle() {
    count.current++;
    console.log(count.current);
  }
  return (
    <div>
      <h2>Timer : {count.current}</h2>
      <button onClick={handle}>button</button>
    </div>
  );
}

export default CounterRerender;
