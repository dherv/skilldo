import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { IconText } from "../styled/Globals.styled";

const TodoTimerStart: FC<Props> = ({ timerStartDate }) => {
  var options = {
    month: "short",
    day: "numeric",
  };
  const startDate = timerStartDate.toLocaleDateString("en-US", options);
  return (
    <div>
      <FontAwesomeIcon icon={faPlay} />
      <IconText>{startDate}</IconText>
    </div>
  );
};

interface Props {
  timerStartDate: Date;
}

export default TodoTimerStart;
