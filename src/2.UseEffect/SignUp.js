import React, { useEffect, useState } from "react";
import "./signup.css";
function SignUp(props) {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    phone: 0,
    password: null,
  });
  const [save, setSave] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (save && formData.name.trim() !== "")
      localStorage.setItem(formData.name, JSON.stringify(formData));
    setSave(false);
  }, [save]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSave(true);
  };

  return (
    //But DOM doesn't change unless JSX output is different.
    <form onSubmit={handleSubmit}>
      <input
        value={formData.name}
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Enter your Name"
      ></input>

      <input
        value={formData.age}
        type="number"
        name="age"
        onChange={handleChange}
        placeholder="Enter your Age"
      ></input>
      <input
        value={formData.email}
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>

      <input
        value={formData.phone}
        type="number"
        name="phone"
        onChange={handleChange}
        placeholder="Enter your Phone"
      ></input>

      <input
        value={formData.password}
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <button>submit</button>
    </form>
  );
}

export default SignUp;

// // ✅ Yes, after a browser refresh:
// // - React component remounts
// // - useEffect with [] runs again
// // - useState resets (fresh values)
// // - localStorage survives

// useEffect(() => {
//   // this runs again after refresh (new mount)
// }, []);
