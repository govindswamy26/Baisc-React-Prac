// 4. Create a like button that toggles between "Like" and "Liked".

// TO change the color of button
import React, { useState } from "react";

function Component4(props) {
  const [like, setLike] = useState(false);

  return (
    <div>
      <h1>{like ? "Liked" : "Like"}</h1>
      <button
        onClick={() => setLike((prev) => !prev)}
        style={{
          backgroundColor: like ? "green" : "white",
          color: like ? "white" : "black",
          padding: "10px 20px",
          border: like ? "none" : "1px solid black",
          borderRadius: like ? "10px" : "0px",
          cursor: "pointer",
        }}
      >
        {like ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default Component4;

// import React, { useState } from "react";

// function Component4(props) {
//   const [like, setLike] = useState(false);
//   return (
//     <div>
//       {!like ? <h1>Like</h1> : <h1>Liked</h1>}
//       <button onClick={() => setLike((like) => !like)}>Like</button>
//     </div>
//   );
// }
// export default Component4;

// 📘 Like Button Toggle Logic

// 1. useState(false) → like = false (initially unliked)
// 2. onClick toggles like using setLike(prev => !prev)
// 3. JSX shows:
//    - "Liked" if like === true
//    - "Like" if like === false
// 4. Fix: use {like ? "Liked" : "Like"} to match expected behavior
