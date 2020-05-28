import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { IconText } from "../styled/Globals.styled";

const TodoTimerLength: FC<Props> = ({ timerLength }) => (
  <div>
    <FontAwesomeIcon icon={faClock} />
    <IconText as="span">{timerLength}</IconText>
  </div>
);

interface Props {
  timerLength: number;
}

export default TodoTimerLength;
