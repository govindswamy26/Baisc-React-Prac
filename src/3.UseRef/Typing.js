//6. Create a component that detects whether a user is typing (add “Typing…” message while typing, hide after 2s of inactivity).
import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useRef, useState } from "react";

function Typing(props) {
  const [value, setvalue] = useState("");
  const [typing, isTyping] = useState(false);
  let ref = useRef(null);
  function handleChange(e) {
    isTyping(true);
    setvalue(e.target.value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      isTyping(false);
    }, 2000);
  }
  useEffect(() => {
    return () => {
      clearTimeout(ref.current);
    };
  }, []);
  return (
    <div>
      {typing && <h3>User Typing...</h3>}
      <input value={value} onChange={handleChange}></input>
    </div>
  );
}

export default Typing;

// Typing Detection Summary:

// ✅ Behavior:
// - Show "User Typing..." when input changes
// - Hide it 2s after user stops typing

// ✅ Logic:
// 1. onChange → handleChange()
// 2. setValue() → triggers re-render
// 3. setTyping(true) → shows message
// 4. clearTimeout(ref.current) → clears any running timer
// 5. setTimeout(...) → sets new 2s timer
// 6. After 2s of no typing → setTyping(false)

// ✅ useRef is used to persist timer ID without causing re-renders

// ✅ Efficient because:
// - Only value state causes re-render
// - ref.current does not trigger re-render
// - Fast debounce logic
