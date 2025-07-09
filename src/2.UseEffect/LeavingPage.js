//14. Build a component that warns the user before leaving the page (use beforeunload).

import React, { useEffect } from "react";

function LeavingPage(props) {
  function handle(event) {
    event.preventDefault();
    event.returnValue =
      "Are you sure you want to leave? Unsaved changes might be lost.";
  }
  useEffect(() => {
    window.addEventListener("beforeunload", handle);
    return () => {
      window.removeEventListener("beforeunload", handle);
    };
  }, []);
  return <div></div>;
}

export default LeavingPage;
