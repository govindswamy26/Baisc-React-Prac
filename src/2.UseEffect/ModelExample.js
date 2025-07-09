import React, { useEffect, useState } from "react";

function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "30%",
            left: "30%",
            background: "white",
            padding: "20px",
            border: "1px solid black",
            zIndex: 1000,
          }}
        >
          <h2>This is a Modal</h2>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ModalExample;
