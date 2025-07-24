import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onAddTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleTodoDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoName && todoDate) {
      onAddTodo(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    } else {
      alert("Please enter both todo name and date.");
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" name="todo" onChange={handleTodoNameChange} value={todoName} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" name="todo-date" onChange={handleTodoDateChange} value={todoDate} id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={() => handleAddTodo()}>
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;