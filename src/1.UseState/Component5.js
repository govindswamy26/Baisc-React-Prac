//5. Update a  live text input and display the entered value below it.

import React, { useState } from "react";

function Component5(props) {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <div>
      <h1>Live text</h1>
      <h3>{text}</h3>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter you text"
      ></input>
    </div>
  );
}

export default Component5;

// 📘 Handling Mid-Text Changes in React Input

// - React tracks every keystroke using onChange
// - Even if the user edits in the middle of the input, state updates correctly
// - e.target.value always reflects full updated input
// - JSX displays the updated string live

//    ********** Progrme Flows ***********

// 📘 React Live Input Program Flow – Component5

// 1. Import & Setup:
//    - React and useState are imported.
//    - Component5 is defined as a functional component.

// 2. useState(""):
//    - Initializes state variable: text = "" (empty string).
//    - React internally stores this state and associates it with the component.

// 3. JSX Return:
//    - JSX includes:
//      - Heading "Live text"
//      - <h3>{text}</h3> to display live user input
//      - <input> with:
//        - value={text} (controlled input)
//        - onChange → updates state using setText(e.target.value)

// 4. Virtual DOM:
//    - React builds a virtual DOM representation of JSX.
//    - On first render: "Live text", empty <h3>, and input field are drawn.

// 5. Mounting:
//    - React mounts Component5 into the real DOM.
//    - DOM is updated with initial state (empty input, empty display).

// 6. User Interaction:
//    - User types into the input.
//    - onChange is triggered on every keystroke.
//    - setText updates the state → React schedules re-render.

// 7. Re-render & Virtual DOM Diffing:
//    - React re-runs Component5 with new text state.
//    - Builds a new virtual DOM tree.
//    - Compares (diffs) it with the previous tree.
//    - Only the changed part (the <h3> and input value) is updated in the real DOM.

// 8. Console Output:
//    - console.log(text) prints the state to the browser console after each re-render.

// 9. Component stays in sync with the typed input.
//    - Even if user types in the middle or end of the string.

// 🧠 Notes:
// - Fully controlled input (React manages the value).
// - Efficient updates via virtual DOM diffing.
// - Fast re-rendering with minimal DOM mutations.
