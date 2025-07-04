//3. Change background color of a div using a color input and `useState`.

// component renders for every input change we can see in console.log
import React, { useState } from "react";
// to apply changes when user clicks button it used two states and when user apply with button then the value is set to setBg color we update the background color with bgColor only
function Component3(props) {
  const [inputColor, setInputColor] = useState("white");
  const [bgColor, setBgColor] = useState("white");
  return (
    <div style={{ backgroundColor: bgColor, height: "200px", padding: "20px" }}>
      <input
        type="text"
        value={inputColor}
        onChange={(e) => setInputColor(e.target.value)}
        placeholder="Enter a color"
      />
      <button onClick={() => setBgColor(inputColor)}>Apply</button>
    </div>
  );
}

export default Component3;

// import React, { useState } from "react";

// function Component3(props) {
//   const [color, setColor] = useState("white");
//   console.log(color);

//   return (
//     <div style={{ backgroundColor: color, height: "200px", padding: "20px" }}>
//       <input
//         type="text"
//         value={color}
//         onChange={(e) => setColor(e.target.value)}
//         placeholder="Enter a color like red, #ff0000"
//       />
//     </div>
//   );
// }

// export default Component3;

// 📘 React Input Types & Examples

// 1. Text       → useState("")        → <input type="text" ... />
// 2. Number     → useState(0)         → <input type="number" ... />
// 3. Password   → useState("")        → <input type="password" ... />
// 4. Checkbox   → useState(false)     → <input type="checkbox" ... checked />
// 5. Radio      → useState("value")   → <input type="radio" ... />
// 6. Select     → useState("value")   → <select>...</select>
// 7. Textarea   → useState("")        → <textarea>...</textarea>
// 8. File Input → useRef(null)        → <input type="file" ref={...} />

// 📘 What is e.target.value?

// - e: Event object from an event like onChange, onClick
// - e.target: The HTML element that triggered the event
// - e.target.value: The current value of that element (usually an input)

// 🧪 Example:
// <input onChange={(e) => console.log(e.target.value)} />

// Typing → shows input value live in the console

// 📘 Two Types of Inputs in React

// 1. Controlled Components
//    - Input value managed by React via useState
//    - Syntax: value={state} onChange={...}

// 2. Uncontrolled Components
//    - Input value managed by DOM
//    - Accessed using useRef and inputRef.current.value

// ✅ Prefer controlled components for most use cases
