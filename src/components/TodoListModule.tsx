import React, { FC } from "react";
import { ITodo } from "../types/interfaces";
import TodoListTitle from "./TodoListTitle";
import TodoList from "./TodoList";
import styles from "./TodoListModule.module.css";

const TodoListModule: FC<Props> = ({ title, todos, onToggleEdit }) => {
  return (
    <div className={styles.wrapper}>
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
