//useCallback :
// Un necessary re-render of child componet

import React, { useCallback, useState } from "react";
import Child from "./Child";
function UseCallbackHook(props) {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // now it is freezed

  // for not recreting functions

  // now after useCall back  the function not useing child
  // but with out dependenceis it can't even change count because of freezing  so add [count]

  // on updating button button child is re-redering which should not be
  // usecallback

  // Second category : Handling Expensive operatino like we did in useMemo
  // with usecallback() - function recreation  saved
  // useMemo - result/value is memo - just saved function call

  //useCallback - functin/recreation is saved
  // what bases we can freez ?
  return (
    <div>
      <div>Count : {count}</div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <Child buttonName="Click me" handle={handleClick}></Child>
    </div>
  );
}

export default UseCallbackHook;
