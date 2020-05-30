import React, { FC } from "react";
import { ITodo } from "../types/interfaces";
import TodoListTitle from "./TodoListTitle";
import TodoList from "./TodoList";

const TodoListModule: FC<Props> = ({ title, todos, onToggleEdit }) => {
  return (
    <div>
      <TodoListTitle title={title} />
      <TodoList todos={todos} onToggleEdit={onToggleEdit} />
    </div>
  );
};

interface Props {
  title: string;
  todos: ITodo[];
  onToggleEdit: () => void;
}
export default TodoListModule;
