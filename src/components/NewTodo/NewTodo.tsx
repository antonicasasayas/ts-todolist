import React, { useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import { Todo } from "../../todo.model";
import "./NewTodo.css";

interface Props {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  items: Todo[];
}

const NewTodo: React.FC<Props> = ({ setTodos, items }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;

    const newTodo = { id: `t${items.length + 1}`, text: enteredText };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" ref={textInputRef} id="todo-text" />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
