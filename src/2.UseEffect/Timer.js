
//13. Simulate a component that subscribes to a data stream and unsubscribes on unmount.
// use conditional rendering in App.js 
import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("⏹ Timer stopped and unsubscribed.");
    };
  }, []);

  return <h1>⏳ Timer: {count}</h1>;
}

export default Timer;


// import React, { useState } from "react";
// import Timer from "./Timer";

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow((prev) => !prev)}>
//         Toggle Timer
//       </button>

//       {show && <Timer />}
//     </div>
//   );
// }

// export default App;


//Here's the complete detailed explanation **entirely in editor-friendly format**:


// ✅ React: Simulate Subscription and Unsubscription using useEffect

// 📌 Goal:
// Create a component that subscribes to a "data stream" (like setInterval, WebSocket, etc.)
// on mount and unsubscribes (cleans up) when the component unmounts.

// 🔹 Example: setInterval used to simulate a stream

// useEffect(() => {
//   // 🔄 Subscribing when component mounts
//   const id = setInterval(() => {
//     // simulate data update every second
//     console.log("streaming data...");
//   }, 1000);

//   // ❌ Cleanup function to unsubscribe on unmount
//   return () => {
//     clearInterval(id); // clean up the stream
//     console.log("unsubscribed on unmount");
//   };
// }, []); // 🔁 Empty dependency array means runs once on mount

// // 🔹 When does a component unmount?
// // - When conditionally rendered component is hidden (e.g., {show && <Timer />})
// // - When parent unmounts
// // - When route changes (React Router)

// // 🔹 Why is cleanup needed?
// // - Prevents memory leaks
// // - Avoids multiple intervals/listeners stacking up
// // - Ensures clean UI and background behavior

// // 🔹 Real-world use cases:
// // - ⏱ Timers (setInterval / setTimeout)
// // - 🌐 WebSockets (live data feeds)
// // - 📡 API polling
// // - 👂 Event listeners (scroll, resize, online/offline)

// // ✅ Summary:
// // - useEffect(() => { subscribe }, []) sets up the stream
// // - return () => { unsubscribe } inside useEffect cleans it up
// // - Component unmount triggers the cleanup function automatically
// ```

// Let me know if you want this implemented with another example like `WebSocket`, `event listeners`, or `API fetch`.
