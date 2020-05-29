import React, { FC } from "react";
import { Title } from "./TodoListTitle.styled";

const TodoListTitle: FC<Props> = ({ title }) => {
  return <Title>{title}</Title>;
};

interface Props {
  title: string;
}

export default TodoListTitle;
