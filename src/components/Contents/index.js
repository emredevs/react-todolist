import { useState, useEffect } from "react";
import { default as TodoForm } from "./Form/index";
import List from "./List/index";
import "./style.css";
export default function Content() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleRemoveTodo = (index) => {
    setTodos((setTodos) => {
      return setTodos.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="container">
      <div className="nav">
        <h1>ToDo List</h1>
      </div>
      <TodoForm
        onAddNewTodo={(value) => setTodos((prev) => [...prev, value])}
      />
      <List saveNote={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}
