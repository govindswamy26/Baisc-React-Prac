import React, { useState } from "react";

function Voting() {
  const [redc, setRed] = useState(0);
  const [bluec, setBlue] = useState(0);
  const [blackc, setBlack] = useState(0);
  const [greenc, setGreen] = useState(0);
  const [vote, setVotes] = useState(0);
  const [issub, setIssub] = useState(false);
  const [over, setOver] = useState(false);
  const voteRed = () => {
    setRed((prev) => prev + 1);
    setVotes((prev) => prev + 1);
  };

  const voteBlue = () => {
    setBlue((prev) => prev + 1);
    setVotes((prev) => prev + 1);
  };

  const voteBlack = () => {
    setBlack((prev) => prev + 1);
    setVotes((prev) => prev + 1);
  };

  const voteGreen = () => {
    setGreen((prev) => prev + 1);
    setVotes((prev) => prev + 1);
  };

  return (
    <div>
      {!over && (
        <>
          <h3>What is your favorite color?</h3>
          <button onClick={voteRed} style={{ width: "150px" }}>
            Red
          </button>
          <br />
          <button onClick={voteBlue} style={{ width: "150px" }}>
            Blue
          </button>
          <br />
          <button onClick={voteBlack} style={{ width: "150px" }}>
            Black
          </button>
          <br />
          <button onClick={voteGreen} style={{ width: "150px" }}>
            Green
          </button>
          <br />
          <br />
          <button
            onClick={() => {
              setIssub(true);
              setOver(true);
            }}
          >
            Submit
          </button>
        </>
      )}

      {issub && (
        <>
          <h2>Results:</h2>
          <h4>Total Votes: {vote}</h4>
          <h4>Red: {((redc / vote) * 100).toFixed(1)}%</h4>
          <h4>Blue: {((bluec / vote) * 100).toFixed(1)}%</h4>
          <h4>Black: {((blackc / vote) * 100).toFixed(1)}%</h4>
          <h4>Green: {((greenc / vote) * 100).toFixed(1)}%</h4>
        </>
      )}
    </div>
  );
}

export default Voting;
