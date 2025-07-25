import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";


function AddTodo({ onAddTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoStatus, setTodoStatus] = useState("pending");

  const handleTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleTodoDateChange = (e) => {
    setTodoDate(e.target.value);
  };
  const handleTodoStatusChange = (e) => {
    setTodoStatus(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoName && todoDate) {
      onAddTodo(todoName, todoDate, todoStatus);
      setTodoName("");
      setTodoDate("");
      setTodoStatus("pending");
    } else {
      alert("Please enter both todo name and date.");
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" name="todo" onChange={handleTodoNameChange} value={todoName} placeholder="Enter Todo Here" />
        </div>
        <div className="col-3">
          <select name="todo-status" onChange={handleTodoStatusChange} value={todoStatus} id="todo-status" placeholder="Select Status">
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="on-hold">On Hold</option>
          </select>
        </div>
        <div className="col-3">
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