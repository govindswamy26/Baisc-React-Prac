import React from "react";
// because of props.handle changes then a new re-render will create a new handle so it will pass a new refernce to child so re-render again  so use Call back
function Child(props) {
  console.log("Child comp re-redered");
  return (
    <div>
      <button onClick={props.handle}>{props.buttonName}</button>
    </div>
  );
}

export default React.memo(Child);

// React memo uses to not rerender with out any changing
// if you are sending a functin , then react.memo not save's from re-rendering
