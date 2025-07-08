//5. Detect mouse position and display it using useEffect and useState.

import React, { useEffect, useState } from "react";

function MousePosition(props) {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  useEffect(() => {
    const handler = (event) => {
      // mouse event object which contain mouse information
      // scroll not include
      setx(event.clientX);
      sety(event.clientY);
    };
    window.addEventListener("mousemove", handler);
  }, []);
  return (
    <div>
      <h1>x: {x}</h1>
      <h1>y: {y}</h1>
    </div>
  );
}

export default MousePosition;

// DOM components for tracking mouse position:

// 1. window or document
//    → Used to attach global mousemove event listener.

// 2. addEventListener('mousemove', handler)
//    → Listens for mouse movement.

// 3. event.clientX, event.clientY
//    → Gets X, Y position relative to the viewport.

// 4. event.pageX, event.pageY
//    → Gets X, Y position relative to the whole page (includes scroll).

// 5. ref (useRef) + element.addEventListener
//    → For tracking mouse position within a specific DOM element.
