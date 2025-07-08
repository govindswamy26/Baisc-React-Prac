//2. Update the document title to show the number of button clicks.

import React, { useEffect, useState } from "react";

function UseEffComp2(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <div>
      <button onClick={(prev) => setCount((prev) => prev + 1)}>button</button>
    </div>
  );
}

export default UseEffComp2;
