import React from "react";
import C from "./C";

function B(props) {
  const { name } = props;
  return (
    <div>
      <C name={name}></C>
    </div>
  );
}

export default B;

// Disadvantage: Passing user through all components even if intermediate components don’t use it.
