import React, { createContext } from "react";
import CompA from "./CompA";
export const UserContext = createContext();
function MainComp(props) {
  const [name, setName] = useState("Govind");
  return (
    <div>
      <UserContext.Provider value={{ name }}>
        <CompA></CompA>
      </UserContext.Provider>
    </div>
  );
}

export default MainComp;
