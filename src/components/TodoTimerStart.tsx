import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { IconText } from "../styled/Globals.styled";
import styles from "./TodoTimerStart.module.css";

const TodoTimerStart: FC<Props> = ({ className, startDate }) => {
  var options = {
    month: "short",
    day: "numeric",
  };
  const startDateString = startDate.toLocaleDateString("en-US", options);
  return (
    <div className={`${styles.container} ${className}`}>
      <FontAwesomeIcon icon={faPlay} />
      <IconText as="span">{startDateString}</IconText>
    </div>
  );
};

interface Props {
  className?: string;
  startDate: Date;
}

export default TodoTimerStart;
