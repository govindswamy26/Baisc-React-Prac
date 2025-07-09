//4. Create a countdown timer and store interval ID using useRef, then clear it on unmount.
import React, { useEffect, useRef, useState } from "react";

function CompUseRef3(props) {
  let ref = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    ref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default CompUseRef3;


// 🔹 useRef creates a persistent, isolated container across re-renders.
// 🔹 Acts like an instance variable in a component.
// 🔹 Does not cause re-renders when updated.

// ✅ Ideal for storing:
// - DOM elements
// - Timer IDs
// - Previous state values
// - Any mutable value not used in rendering

// 📊 Comparison:

// Feature                          | let (normal variable) | useRef
// --------------------------------|------------------------|-------
// Persists across re-renders      | ❌                     | ✅
// Safe across multiple components | ❌                     | ✅
// Triggers re-renders             | ❌                     | ❌
// Good for storing timers         | ❌                     | ✅

// 🧠 In short:
// Use `useRef` for values that must survive re-renders without triggering updates.
