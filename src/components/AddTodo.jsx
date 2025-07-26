import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";


function AddTodo({ onAddTodo }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  // const [todoStatus, setTodoStatus] = useState("pending");

  const todoNameRef = useRef("");
  const todoDateRef = useRef("");
  const todoStatusRef = useRef("pending");

  // const handleTodoNameChange = (e) => {
  //   setTodoName(e.target.value);
  // };
  // const handleTodoDateChange = (e) => {
  //   setTodoDate(e.target.value);
  // };
  // const handleTodoStatusChange = (e) => {
  //   setTodoStatus(e.target.value);
  // };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoName = todoNameRef.current.value;
    const todoDate = todoDateRef.current.value;
    const todoStatus = todoStatusRef.current.value;
    if (todoName && todoDate) {
      onAddTodo(todoName, todoDate, todoStatus);
      todoNameRef.current.value = "";
      todoDateRef.current.value = "";
      todoStatusRef.current.value = "pending";
    } else {
      alert("Please enter both todo name and date.");
    }
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddTodo}>
        <div className="row kg-row">
          <div className="col-4">
            <input type="text" name="todo" ref={todoNameRef} placeholder="Enter Todo Here" />
          </div>
          <div className="col-3">
            <select name="todo-status" ref={todoStatusRef} id="todo-status" placeholder="Select Status">
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>
          <div className="col-3">
            <input type="date" name="todo-date" ref={todoDateRef} id="" />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button" >
              <BiMessageAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;