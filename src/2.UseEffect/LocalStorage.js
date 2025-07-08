//9. Save form data to localStorage whenever input changes.

import React, { useEffect, useState } from "react";

function LocalStorage(props) {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    phone: 0,
    password: null,
  });
  // const [save, setSave] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <form>
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
    </form>
  );
}

export default LocalStorage;
