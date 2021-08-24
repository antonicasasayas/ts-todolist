import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "80px" }}>Todo List</h1>
      <NewTodo onAddTodo={addTodo} todos={todos} />
      <TodoList items={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
