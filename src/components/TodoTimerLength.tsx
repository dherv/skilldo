import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { IconText } from "../styled/Globals.styled";

const TodoTimerLength: FC<Props> = ({ className, timerLength }) => (
  <div className={className}>
    <FontAwesomeIcon icon={faClock} />
    <IconText as="span">{timerLength}</IconText>
  </div>
);

interface Props {
  className?: string;
  timerLength: number;
}

export default TodoTimerLength;
