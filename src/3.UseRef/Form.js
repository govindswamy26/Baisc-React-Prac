import React, { useRef, useState } from "react";

function Form() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const nameValid = useRef(false);
  const emailValid = useRef(false);
  const passwordValid = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // validate inputs
    if (name === "name") nameValid.current = value.trim().length > 0;
    if (name === "email") emailValid.current = /\S+@\S+\.\S+/.test(value);
    if (name === "password") passwordValid.current = value.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid =
      nameValid.current && emailValid.current && passwordValid.current;
    if (isFormValid) {
      alert("Form submitted ✅");
    } else {
      alert("Invalid input(s) ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={nameRef}
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        ref={emailRef}
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        ref={passwordRef}
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
