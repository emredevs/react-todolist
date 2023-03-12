export default function Form({ onAddNewTodo }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const todoInput = event.target["todoInput"];
    if (!todoInput.value) {
      return;
    }
    onAddNewTodo(todoInput.value);
    todoInput.value = "";
  };
  return (
    <div className="noteBtn">
      <form onSubmit={onSubmit}>
        <input name="todoInput" placeholder="add todo" />
        <button>Add</button>
      </form>
    </div>
  );
}
