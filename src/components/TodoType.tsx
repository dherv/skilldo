import React, { FC, ComponentType } from "react";
import {
  RedButton,
  BlueButton,
  GreenButton,
  OrangeButton,
} from "./TodoType.styled";

interface Props {
  type: "Book" | "Language" | "Framework" | "Project";
}
interface ButtonMap {
  [key: string]: ComponentType;
}

const TodoType: FC<Props> = ({ type }) => {
  let components: ButtonMap = {
    Book: RedButton,
    Language: GreenButton,
    Framework: BlueButton,
    Project: OrangeButton,
  };
  const letter = type.charAt(0);
  const TypeTodoButton = components[type];
  return <TypeTodoButton>{letter}</TypeTodoButton>;
};

export default TodoType;
