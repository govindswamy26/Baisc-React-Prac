import React from "react";
import B from "./B";
function A(props) {
  const { name } = props;

  return (
    <div>
      <B name={name}></B>
    </div>
  );
}

export default A;

// Disadvantage: Passing user through all components even if intermediate components don’t use it.
// Yes, you can pass props directly to E — but only if E is directly rendered by App.
// If E is nested deep (inside A → B → C → D), you can’t access it directly from App.
