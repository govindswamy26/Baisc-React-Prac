//12. Create a star rating component (1 to 5 stars) with active highlight.

import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0); // current selected rating
  const [hover, setHover] = useState(0); // rating on hover

  return (
    <div>
      <h2>Rate Us:</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: star <= (hover || rating) ? "gold" : "lightgray",
          }}
        >
          ★
        </span>
      ))}
      <p>
        You rated: {rating} star{rating > 1 && "s"}
      </p>
    </div>
  );
}

export default StarRating;
