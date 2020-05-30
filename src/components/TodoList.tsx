import React, { FC } from "react";
import { ITodo } from "../types/interfaces";
import Todo from "./Todo";

const TodoList: FC<Props> = ({ todos, onToggleEdit }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onToggleEdit={onToggleEdit} />
        </li>
      ))}
    </ul>
  );
};

interface Props {
  todos: ITodo[];
  onToggleEdit: () => void;
}
export default TodoList;
