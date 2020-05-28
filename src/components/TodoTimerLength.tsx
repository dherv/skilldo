import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./TodoTimerLength.module.css";

const TodoTimerLength: FC<Props> = ({ timerLength }) => (
  <div className={styles.container}>
    <FontAwesomeIcon icon={faClock} />
    <span className={styles.text}>{timerLength}</span>
  </div>
);

interface Props {
  timerLength: number;
}

export default TodoTimerLength;
