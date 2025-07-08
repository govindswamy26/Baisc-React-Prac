import React, { useEffect, useState } from "react";
//10. Display online/offline network status using the 'online' and 'offline' window events.

function OnlineOffline(props) {
  const [online, setOnline] = useState(navigator.onLine);
  const handle = () => {
    setOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handle);
    window.addEventListener("offline", handle);
    return () => {
      window.removeEventListener("offline", handle);
      window.removeEventListener("online", handle);
    };
  }, []);

  return (
    <>
      {online ? (
        <h1>You are online</h1>
      ) : (
        <h1 style={{ color: "red" }}>You are offline</h1>
      )}
    </>
  );
}

export default OnlineOffline;
