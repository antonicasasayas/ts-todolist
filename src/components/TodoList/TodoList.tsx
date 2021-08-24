import { Todo } from "../../todo.model";

import "./TodoList.css";
interface Props {
  onDeleteTodo: (id: string) => void;
  items: Todo[];
}

const TodoList: React.FC<Props> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((todo: Todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
