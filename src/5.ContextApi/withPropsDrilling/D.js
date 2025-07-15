import React from "react";

function D(props) {
  const { name } = props;
  return (
    <div>
      <h1> UserName : {name}</h1>
    </div>
  );
}

export default D;

// Disadvantage: Passing user through all components even if intermediate components don’t use it.
