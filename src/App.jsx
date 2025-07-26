import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import { useState } from "react"
import "./App.css"

function App() {

  let [todoItems, setTodoItems] = useState([])

  const addTodo = (name, date, status) => {
    setTodoItems((currentItems) => [...currentItems, { name, date, status }])
  }

  const deleteTodo = (index) => {
    // const newTodoItems = todoItems.filter((_, i) => i !== index)
    setTodoItems((currentItems) => todoItems.filter((_, i) => i !== index));
  }

  const editTodo = (index, newName, newDate, updatedStatus) => {
    // Update the state with the modified todo items
    setTodoItems((currentItems) => {
      const updatedTodoItems = currentItems.map((item, i) => {
        if (i === index) {
          return {...item, name: newName, date: newDate, status: updatedStatus};
        } else {
          return item;
        }
      })
      return updatedTodoItems;
    });
  }

  return <center className="todo-container">
    <AppName />
    <AddTodo onAddTodo={addTodo} />
    <TodoItems todoItems={todoItems} onDeleteTodo={deleteTodo} onEditTodo={editTodo}></TodoItems>
    {todoItems.length === 0 && <WelcomeMessage />}
  </center>
}

export default App
