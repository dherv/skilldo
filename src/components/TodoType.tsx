import React, { FC, ComponentType } from "react";
import {
  RedButton,
  BlueButton,
  GreenButton,
  OrangeButton,
} from "../styled/Globals.styled";

const TodoType: FC<Props> = ({ type }) => {
  let components: ColorMap = {
    Book: RedButton,
    Language: GreenButton,
    Framework: BlueButton,
    Project: OrangeButton,
  };
  const letter = type.charAt(0);
  const TypeTodoButton = components[type];
  return <TypeTodoButton>{letter}</TypeTodoButton>;
};

interface Props {
  type: "Book" | "Language" | "Framework" | "Project";
}
interface ColorMap {
  [key: string]: ComponentType;
}

export default TodoType;
