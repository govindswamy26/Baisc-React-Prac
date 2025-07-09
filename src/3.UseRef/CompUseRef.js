
//1. Create a component with an input field and a button. On button click, focus the input using useRef.

import React, { useRef, useState } from "react";

function CompUseRef(props) {
  const inputref = useRef(false);
  
  function handle() {
    inputref.current.focus();
  }
  return (
    <div>
      <input type="text" ref={inputref}></input>
      <button onClick={handle}>Click Me!!</button>
    </div>
  );
}

export default CompUseRef;
