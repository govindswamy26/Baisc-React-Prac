import React, { useEffect, useState } from "react";

function Demo1(props) {
  const [name, setName] = useState("");
  console.log("out side useEffect"); // run's every time it renders
  useEffect(() => {
    console.log("inside useeffect "); // runs first time + when name changes

    return () => {
      console.log("return funtion in useEffect"); // it clean up the previous stat
    };
  }, [name]); // it will render for first Mount + when State changes
  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
}

export default Demo1;

// useEffect Execution Flow:

// 1. Initial Render:
//    - Runs effect logic.
//    - Logs:
//      - "inside useeffect"
//      - "name has changed"

// 2. On every 'name' update:
//    - First runs the cleanup from previous effect.
//      - Logs: "return function in useEffect"
//    - Then runs the new effect.
//      - Logs:
//        - "inside useeffect"
//        - "name has changed"

// 3. On component unmount:
//    - Only cleanup runs.
//      - Logs: "return function in useEffect"

// Reason:
// React cleans up previous effects before re-running to prevent memory leaks and ensure correct behavior.

// No, useState does NOT persist data after refresh.

// Explanation:
// - useState stores data only in memory during the component's lifecycle.
// - On browser refresh, the entire React app reloads, resetting all state to initial values.
// - State is not saved to disk or storage by default.

// To persist data across refreshes, use:
// 1. localStorage or sessionStorage
// 2. IndexedDB
// 3. Backend/database with API call

// No, the return function in useEffect does NOT clear useState.

// Explanation:
// - The return function only cleans up side effects (like intervals, event listeners, subscriptions).
// - It does NOT reset or clear state set by useState.
// - useState retains its value unless you explicitly change it using setState.

// Example:
// - Even after cleanup runs, the state value remains unchanged unless setName("") or similar is called manually.
