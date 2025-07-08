import React, { useEffect, useState } from "react";

function ExamScreen() {
  const [showWarning, setShowWarning] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  const requestFullScreen = () => {
    console.log("request full screen");
    document.documentElement.requestFullscreen();
  };

  useEffect(() => {
    const checkFullScreenAndSize = () => {
      const isFullScreen = document.fullscreenElement; // it returns Type: HTMLElement or null   null -> when not in full screen
      const isWindowSmall = window.innerHeight < 600 || window.innerWidth < 800; // it returns boolean

      if (!isFullScreen || isWindowSmall) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    };

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("resize", checkFullScreenAndSize);
    document.addEventListener("fullscreenchange", checkFullScreenAndSize);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    checkFullScreenAndSize();

    return () => {
      window.removeEventListener("resize", checkFullScreenAndSize);
      document.removeEventListener("fullscreenchange", checkFullScreenAndSize);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      <button onClick={requestFullScreen}>Start Exam (Fullscreen)</button>

      {isOffline && (
        <div style={{ color: "orange", fontWeight: "bold" }}>
          ⚠️ You are offline. Please check your internet connection.
        </div>
      )}

      {showWarning && (
        <div style={{ color: "red", fontWeight: "bold" }}>
          ⚠️ Please enable Fullscreen and do not resize the browser.
        </div>
      )}

      <p>Exam in Progress...</p>
    </div>
  );
}

export default ExamScreen;

// Explanation of All Event Listeners in the ExamScreen Program:

// 1. 'resize' (window)
//    - Event: window.addEventListener("resize", checkFullScreenAndSize)
//    - Purpose: Detect if user resizes browser window below allowed dimensions (height < 600 or width < 800)
//    - Triggers: When browser window size changes
//    - Action: Shows warning if window is too small

// 2. 'fullscreenchange' (document)
//    - Event: document.addEventListener("fullscreenchange", checkFullScreenAndSize)
//    - Purpose: Detect when user enters or exits fullscreen mode
//    - Triggers: When fullscreen is enabled or disabled via requestFullscreen or ESC key
//    - Action: Shows warning if user exits fullscreen

// 3. 'online' (window)
//    - Event: window.addEventListener("online", handleOnline)
//    - Purpose: Detect when the user regains internet connection
//    - Triggers: When internet reconnects
//    - Action: Hides the "You are offline" warning

// 4. 'offline' (window)
//    - Event: window.addEventListener("offline", handleOffline)
//    - Purpose: Detect when the user loses internet connection
//    - Triggers: When the network disconnects
//    - Action: Displays a warning that user is offline

// Cleanup:
// - All these listeners are removed in the cleanup function (return inside useEffect) to prevent memory leaks on component unmount.

// Yes — the useEffect function itself runs **only once** (on mount) because you passed an empty dependency array `[]`.

// However, the **functions you attach inside useEffect (event listeners)** keep working independently after the effect runs.

// How It Works:

// 1. useEffect(() => { ... }, [])
//    → Runs once when component mounts.

// 2. Inside it, you register listeners:
//    - window.addEventListener("resize", checkFullScreenAndSize)
//    - document.addEventListener("fullscreenchange", checkFullScreenAndSize)
//    - window.addEventListener("online", handleOnline)
//    - window.addEventListener("offline", handleOffline)

// 3. These listeners are handled by the browser's event system.
//    → They are not controlled by React or re-renders.
//    → Whenever their event triggers (e.g. window resizes), the **callback functions** (`checkFullScreenAndSize`, `handleOnline`, etc.) execute.

// 4. Even though useEffect doesn't re-run, the browser knows:
//    - "When resize happens, call checkFullScreenAndSize"

// 5. Cleanup:
//    - On unmount, React calls the return function from useEffect to remove these listeners → prevents memory leaks.

// Conclusion:
// ✅ useEffect sets up the listeners only once.
// ✅ Listeners keep working on their own.
// ✅ When the event occurs, the **attached callback runs**, not the whole useEffect again.

// ```txt
// Who Handles the Event Listeners?

// It's the **Browser's JavaScript engine** — not React.

// Here’s the detailed breakdown:

// 1. You use:
//    window.addEventListener("resize", callback)
//    document.addEventListener("fullscreenchange", callback)

// 2. These are **Web API** methods provided by the browser (not React-specific).

// 3. Once registered, the **browser watches** for those specific events (like resize, fullscreenchange, online/offline).

// 4. When the event occurs:
//    ✅ The browser automatically executes the callback function (like checkFullScreenAndSize)

// 5. React is only involved when:
//    - You call `setState()` inside the callback
//    - That causes React to re-render the component and update the UI

// 🧠 Summary:
// - Listeners are watched and triggered by the **browser**
// - You just register them once using useEffect
// - React comes in only when state changes and re-render is needed
// ```

// ```txt
// Why All Functions Are Inside useEffect:

// 1. Encapsulation:
//    ➤ All event listener logic (add, remove, and handlers) is grouped inside one useEffect.
//    ➤ Keeps related code organized and scoped to lifecycle logic.

// 2. Controlled Setup & Cleanup:
//    ➤ useEffect runs once on mount (because of []), perfect for attaching listeners.
//    ➤ It also returns a cleanup function to remove those listeners on unmount.

// 3. React Best Practice:
//    ➤ Listeners should be added only once when the component loads.
//    ➤ Keeping them in useEffect ensures they aren’t re-registered on every render.

// 4. Access to Current State:
//    ➤ You can use state-updating functions like `setShowWarning()` and `setIsOffline()` inside these listener callbacks.
//    ➤ Since functions are defined inside useEffect, they "capture" the latest logic/context.

// 5. Prevent Memory Leaks:
//    ➤ The cleanup function in useEffect removes all listeners when the component is removed.
//    ➤ This prevents memory leaks and bugs from duplicate or stale listeners.

// ✅ Summary:
// Putting all setup, logic, and cleanup inside useEffect ensures:
// - Clean structure
// - Safe listener management
// - Accurate state usage
// - Good performance
// ```
