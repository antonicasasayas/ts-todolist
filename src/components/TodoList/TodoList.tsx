import { Todo } from "../../todo.model";
import { Dispatch, SetStateAction } from "react";
import './TodoList.css'
interface Props {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  items: Todo[];
}

const TodoList: React.FC<Props> = ({ items, setTodos }) => {
  const deleteTodo = (id: string) => {
    setTodos(items.filter((item) => item.id !== id));
  };
  return (
    <ul>
      {items.map((todo: Todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
