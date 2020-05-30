import React, { FC } from "react";
import { ITodo } from "../types/interfaces";
import TodoListTitle from "./TodoListTitle";
import TodoList from "./TodoList";
import { Container } from "./TodoListModule.styled";

const TodoListModule: FC<Props> = ({ title, todos, onToggleEdit }) => {
  return (
    <Container>
      <TodoListTitle title={title} />
      <TodoList todos={todos} onToggleEdit={onToggleEdit} />
    </Container>
  );
};

interface Props {
  title: string;
  todos: ITodo[];
  onToggleEdit: () => void;
}
export default TodoListModule;
