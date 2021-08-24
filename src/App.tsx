import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  
  



  return (
    <div >
        <h1 style={{textAlign:'center', fontSize:'80px'}}>Todo List</h1>
      <NewTodo items={todos} setTodos={setTodos} />
      <TodoList items={todos} setTodos={setTodos }/>
    </div>
  );
};

export default App;
