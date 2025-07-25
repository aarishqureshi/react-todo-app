import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function todoItems({ todoItems, onDeleteTodo, onEditTodo }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem 
            key={index} 
            index={index} 
            todoName={item.name} 
            todoDate={item.date} 
            todoStatus={item.status} 
            onDeleteTodo={onDeleteTodo} 
            onEditTodo={onEditTodo}> 
        </TodoItem>
      ))}
    </div>
  );
}

export default todoItems;