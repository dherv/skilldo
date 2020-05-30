import React, { FC, ComponentType } from "react";
import {
  RedButton,
  BlueButton,
  GreenButton,
  OrangeButton,
} from "../styled/Globals.styled";
import { TType } from "../types/types";

const TodoType: FC<Props> = ({ className, type }) => {
  let components: ColorMap = {
    Book: RedButton,
    Language: GreenButton,
    Framework: BlueButton,
    Project: OrangeButton,
  };
  const letter = type.charAt(0);
  const TypeTodoButton = components[type];
  return (
    <div className={className}>
      <TypeTodoButton>{letter}</TypeTodoButton>
    </div>
  );
};

interface Props {
  className?: string;
  type: TType;
}
interface ColorMap {
  [key: string]: ComponentType;
}

export default TodoType;
