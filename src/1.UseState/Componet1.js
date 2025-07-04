//1. Create a counter with Increment and Decrement buttons.

import React, { Component, useState } from "react";

function Component1(props) {
  const [count, setCount] = useState(0);
  console.log("render");

  return (
    <main>
      <h1>couter : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </main>
  );
}

export default Component1;

// 📘 React Functional Component Re-render Summary

// 1. Re-render Behavior:
//    - In functional components, the entire function runs on every re-render.
//    - This includes variables, function calls, logs, and JSX.

// 2. Triggering Re-render:
//    - Calling `setState` (from `useState`) updates state.
//    - This causes the component function to re-execute.

// 3. Example:
//    function Counter() {
//      const [count, setCount] = useState(0);
//      console.log("Rendered"); // logs every re-render
//      return <p>{count}</p>;
//    }

// 4. Notes:
//    - State values persist across renders.
//    - `useEffect(() => {}, [])` runs only once on mount.
//    - Avoid putting expensive logic directly inside the component.

// 📘 Why Direct Function Calls Cause Infinite Loop in JSX

// 1. JSX executes everything inside `{}` during render.
// 2. Writing `onClick={fn()}` calls the function immediately.
// 3. If that function updates state → causes re-render → re-calls the function.
// 4. This leads to infinite re-renders.

// ❌ Wrong:
// <button onClick={setCount(count + 1)}>Click</button>

// ✅ Correct:
// <button onClick={() => setCount(count + 1)}>Click</button>

// 1. 🧠 JavaScript Engine starts:
//    - Parses and compiles the `Component1` module.
//    - React and `useState` are imported.

// 2. 🧩 React App Entry:
//    - React starts from index.js (or main.jsx in Vite).
//    - It renders `<App />` component using ReactDOM.
//    - Inside `<App />`, somewhere it uses `<Component1 />`.

// 3. 🧠 Component1 Function is Called:
//    - React calls `Component1()` as a plain function.

// 4. 🌀 useState(0) executes:
//    - React creates an internal state slot and stores initial value = 0.
//    - Returns: `[count, setCount]` where count = 0 and setCount is a special setter function.

// 5. 🖨️ console.log("render") runs:
//    - Outputs "render" to the console.
//    - Shows that the component function ran (rendered).

// 6. 🧱 JSX is parsed:
//    - JSX is converted to React.createElement() calls under the hood.
//    - React builds a virtual DOM tree:
//      <main>
//        <h1>couter: 0</h1>
//        <button>...</button>
//        <button>...</button>
//      </main>

// 7. 🎨 DOM Rendering:
//    - React compares virtual DOM with real DOM.
//    - Mounts the component and updates actual DOM on the browser.

// 8. 👆 Event Handlers:
//    - React attaches `onClick` listeners to both buttons.
//    - Listeners are non-blocking and use synthetic event system.

// 9. 🖱️ When "Increment" is clicked:
//    - `setCount((prev) => prev + 1)` is triggered.
//    - React schedules a state update.
//    - Re-renders Component1 with new state (count = 1).
//    - Again calls `Component1()` → `useState(1)` → `console.log("render")` → JSX built again → DOM updated.

// 10. 🔁 Same process repeats for "Decrement" click.

/// **** summarize ***
// 📘 React Component Execution Flow (Component1)

// 1. Imports React and useState
// 2. React calls Component1() during initial render
// 3. useState(0) registers state, returns [count, setCount]
// 4. console.log("render") logs on each render
// 5. JSX → Virtual DOM created
// 6. Virtual DOM → Real DOM (via reconciliation)
// 7. React attaches onClick handlers
// 8. On click → setCount triggers re-render
// 9. Component1() runs again with updated state
// 10. Process repeats for each state change
