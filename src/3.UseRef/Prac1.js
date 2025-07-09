import React, { useEffect, useRef, useState } from "react";

function Prac1(props) {
  // let [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("component renders");
  });
  const ref = useRef(0);
  // ref is only have one property current
  function handle() {
    ref.current++;
    console.log(ref.current);
  }
  return (
    <div>
      <button onClick={handle}>Click me!!</button>
      <input />
    </div>
  );
}

export default Prac1;
