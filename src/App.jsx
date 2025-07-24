import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import { useState } from "react"
import "./App.css"

function App() {

  let [todoItems, setTodoItems] = useState([])

  const addTodo = (name, date) => {
    console.log("Adding Todo:", name, date)
    setTodoItems([...todoItems, { name, date }])
  }

  const deleteTodo = (index) => {
    const newTodoItems = todoItems.filter((_, i) => i !== index)
    setTodoItems(newTodoItems)
  }

  return <center className="todo-container">
    <AppName />
    <AddTodo onAddTodo={addTodo} />
    <TodoItems todoItems={todoItems} onDeleteTodo={deleteTodo}></TodoItems>
    {todoItems.length === 0 && <WelcomeMessage />}
  </center>
}

export default App
