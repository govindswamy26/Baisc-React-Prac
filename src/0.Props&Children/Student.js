import PropTypes from "prop-types";

import React from "react";
// props is js object

// Prop-types

// Default props - default values for props in case they are not passed from the parent component
function Student(props) {
  return (
    <div className="student">
      <p> Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent ? "YES" : "NO"}</p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.number,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Student;
