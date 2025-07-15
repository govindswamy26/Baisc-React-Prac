import React from "react";
import D from "./D";
function C(props) {
  const { name } = props;
  return (
    <div>
      <D name={name}></D>
    </div>
  );
}

export default C;

// Disadvantage: Passing user through all components even if intermediate components don’t use it.
