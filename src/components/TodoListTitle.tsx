import React, { FC } from "react";
import { Heading } from "../styled/Headings.styled";

const TodoListTitle: FC<Props> = ({ title }) => {
  return <Heading.h3>{title}</Heading.h3>;
};

interface Props {
  title: string;
}

export default TodoListTitle;
