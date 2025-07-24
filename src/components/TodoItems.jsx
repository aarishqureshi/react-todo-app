import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

function todoItems({ todoItems, onDeleteTodo }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem key={index} index={index} todoName={item.name} todoDate={item.date} onDeleteTodo={onDeleteTodo} />
      ))}
    </div>
  );
}

export default todoItems;