import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (trimmedName !== "" && trimmedEmail !== "") {
      setSubmitted(true);
    }

    setName("");
    setEmail("");
  }

  return (
    <div>
      <div>
        <h3>Enter your Name:</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <h3>Enter your Email:</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>

      {submitted && (
        <div>
          <h2>Data Submitted</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
