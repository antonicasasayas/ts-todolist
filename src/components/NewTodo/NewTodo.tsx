import React, { useRef } from "react";
import { Todo } from "../../todo.model";
import "./NewTodo.css";



type Props = {

  onAddTodo: (todo: Todo) => void;
  todos: Todo[];
}

const NewTodo: React.FC<Props> = ({ onAddTodo, todos }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();

     const enteredText = textInputRef.current!.value;

    const newTodo = { id: `t${todos.length + 1}`, text: enteredText };
    
    onAddTodo(newTodo)
  }
 

  

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" ref={textInputRef} id="todo-text" />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
