import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { IconText } from "../styled/Globals.styled";
import { Container } from "./TodoTimerStart.styled";

const TodoTimerStart: FC<Props> = ({ className, startDate }) => {
  var options = {
    month: "short",
    day: "numeric",
  };
  const startDateString = startDate.toLocaleDateString("en-US", options);
  return (
    <Container className={className}>
      <FontAwesomeIcon icon={faPlay} />
      <IconText as="span">{startDateString}</IconText>
    </Container>
  );
};

interface Props {
  className?: string;
  startDate: Date;
}

export default TodoTimerStart;
