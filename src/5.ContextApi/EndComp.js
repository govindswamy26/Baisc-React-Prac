import React, { useContext } from "react";
import { UserContext } from "./MainComp";

function EndComp() {
  const { name } = useContext(UserContext);

  return <h2>Hello, {name}</h2>;
}

export default EndComp;
