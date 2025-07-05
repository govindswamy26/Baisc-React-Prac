//Build a toggleable password visibility input.

import React, { useState } from "react";

function Password(props) {
  const [visible, setVisible] = useState(true);
  const [pass, setPass] = useState();
  console.log("rendered");
  return (
    <main>
      <input
        type={!visible ? "text" : "password"}
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        placeholder="enter your password"
      ></input>
      <button onClick={() => setVisible((prev) => !prev)}>
        {visible ? "Hide" : "Show"}
      </button>
    </main>
  );
}

export default Password;
