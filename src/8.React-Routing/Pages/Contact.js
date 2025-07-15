import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact(props) {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="govind">Go to Govind</Link> {/* relative path */}
      <Outlet />
    </div>
  );
}

export default Contact;
