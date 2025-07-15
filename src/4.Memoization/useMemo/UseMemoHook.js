import React, { useMemo, useState } from "react";

function UseMemoHook(props) {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // we can youse useCallback to save to function recreation
  // but in this case useMemo is enough since we are not passing the function as a prop

  const expensiveTask = (num) => {
    console.log("Expensive Task");
    for (let i = 0; i < 1000000000; i++) {} // simulate heavy work
    return num * 2;
  };

  // for any fixed input useMemo direclty return without function call
  // if input change then function call and save it in useMemo
  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count : {count}</div>
      <div>Double : {doubleValue}</div>
      <input
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      ></input>
    </div>
  );
}

export default UseMemoHook; //comment dont' change
