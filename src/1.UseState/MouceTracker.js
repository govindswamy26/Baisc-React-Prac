import React, { useState } from "react";

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      style={{
        height: "300px",
        border: "2px solid black",
        textAlign: "center",
        paddingTop: "100px",
      }}
    >
      <h2>Mouse Position</h2>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  );
}

export default MouseTracker;

// 📘 Mouse Tracker Using Only useState

// ✅ Steps:
// 1. useState({x: 0, y: 0}) to store position
// 2. onMouseMove on a <div> captures event
// 3. event.clientX and clientY → passed to setState
// 4. React re-renders on every mouse move

// ❌ No useEffect or useRef needed
// ✅ Fully valid using only useState

// 📘 How Mouse Tracker Works (Only useState)

// 1. useState({x: 0, y: 0}) → holds mouse position
// 2. onMouseMove runs on every move inside <div>
// 3. Captures e.clientX and e.clientY
// 4. setPosition updates the state
// 5. React re-renders → <p>X: ..., Y: ...</p> updates
// 6. Runs continuously as mouse moves

// ✅ No useEffect needed
// ✅ Clean, simple reactivity using just useState

// 📘 Why React onMouseMove Works Without addEventListener

// ✅ React handles DOM events using its Synthetic Event System
// ✅ Writing onMouseMove in JSX is enough:
//    - React binds event behind the scenes
//    - No need to manually call addEventListener
// ✅ React uses event delegation at root DOM level

// 🧠 Result:
// - You get clean event handling
// - No need for manual cleanup or native DOM logic
