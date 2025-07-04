import React, { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (text.trim() === "") return;
    setTasks([...tasks, text]); // spread operator
    setText("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDo List</h1>

      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => handleDeleteTask(index)}>Delete</button>
        </div>
      ))}

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default Todo;

// 📘 Functional Todo App Flow in React

// 1. useState("")
//    - text: stores input field value
// 2. useState([])
//    - tasks: stores list of all added tasks

// 3. Input field
//    - value bound to `text`
//    - onChange updates `text` live

// 4. Add Task Button:
//    - Validates and adds `text` to `tasks` array
//    - Clears input field

// 5. Display Tasks:
//    - tasks.map(...) creates a <li> for each task
//    - Each task has its own Delete button

// 6. Delete Button:
//    - Deletes task by filtering out based on index
//    - Updates state, triggers re-render

// 📘 setTasks([...tasks, text])

// - Adds a new task to the existing list
// - [...tasks] → copies old tasks
// - text → the new task string
// - setTasks(...) → updates state with the new array
// - React re-renders to show the updated list

// 📘 Will UI Render the Same Way?

// ✅ Yes — the UI looks identical to what you expect.
// 🧠 But React:
//    - Re-runs the component
//    - Creates a new virtual DOM
//    - Diffs it with the old one
//    - Updates only what’s changed
// 🔁 Final result: Efficient re-render with correct visual output

// 📘 Will Tasks Render Inside One <div> or Multiple?

// - tasks.map(...) returns a new JSX block per task
// - Each task creates its own <div> (as written in your code)

// 🧪 So: Multiple <div>s are created — one per task
// ✅ This is correct and expected in React rendering

// 💡 To group all tasks under one parent:
//   - Wrap .map(...) inside a single outer <ul> or <div>
