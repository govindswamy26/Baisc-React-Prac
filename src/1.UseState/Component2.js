// . Toggle text between "ON" and "OFF" on button click.

import React, { useState } from "react";

function Component2(props) {
  const [on, setON] = useState(true);
  console.log("render");

  return (
    <div>
      {on ? <h1>ON</h1> : <h1>OFF</h1>}
      <button onClick={() => setON((prev) => !prev)}>Toogle</button>
    </div>
  );
}

export default Component2;

// 📘 React Render Phases in Component2

// 1. Initial Render (Mount Phase)
//    - Component runs once automatically
//    - useState initializes state to true
//    - JSX shows "ON"
//    - Console logs "render"

// 2. Re-render (Update Phase)
//    - Triggered by state change (setON)
//    - Component runs again with updated state
//    - JSX updates to show "ON" or "OFF"
//    - Only changed DOM parts are updated

// 📘 Line-by-Line Execution of Component2

// 1. import React, { useState } → load React and state hook
// 2. function Component2 → defines a functional component
// 3. const [on, setON] = useState(true)
//    - Initializes state to true
//    - Returns state and updater function
// 4. console.log("render") → logs on every render
// 5. return JSX:
//    - Shows <h1>ON</h1> if on === true, else <h1>OFF</h1>
//    - Button toggles state using setON(prev => !prev)
// 6. On button click:
//    - State toggles
//    - Component re-renders
//    - DOM updates with new text
