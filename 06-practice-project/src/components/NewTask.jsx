import React, { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnterdTask] = useState("");
  function handleChange(event) {
    setEnterdTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim().length > 0) {
      setEnterdTask("");
      onAdd(enteredTask);
    }
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
