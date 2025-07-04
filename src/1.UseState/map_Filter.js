import React from "react";

function FilterMapExample() {
  const students = [
    { name: "Govind", marks: 90 },
    { name: "Ajay", marks: 45 },
    { name: "Sneha", marks: 78 },
    { name: "Ravi", marks: 30 },
  ];

  // filter: select students with marks >= 50
  const passedStudents = students.filter((student) => student.marks >= 50);

  // map: extract just names from student array
  const studentNames = students.map((student) => student.name);

  return (
    <main style={{ padding: "20px" }}>
      <h2>All Students</h2>
      <ul>
        {students.map((s, index) => (
          <li key={index}>
            {s.name} - {s.marks} marks
          </li>
        ))}
      </ul>

      <h2>Passed Students (marks ≥ 50)</h2>
      <ul>
        {passedStudents.map((s, index) => (
          <li key={index}>
            {s.name} - {s.marks} marks
          </li>
        ))}
      </ul>

      <h2>Only Names (using map)</h2>
      <p>{studentNames.join(", ")}</p>
    </main>
  );
}

export default FilterMapExample;
