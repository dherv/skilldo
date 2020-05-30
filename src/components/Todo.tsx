import React, { FC } from "react";
import TodoTitle from "./TodoTitle";
import styles from "./Todo.module.css";
import TodoSettings from "./TodoSettings";
import TodoType from "./TodoType";
import TodoTimerLength from "./TodoTimerLength";
import TodoTimerStart from "./TodoTimerStart";
import { Styled } from "./Todo.styled";
import { ITodo } from "../types/interfaces";

const Todo: FC<Props> = ({
  todo: { title, type, startDate, timerLength },
  onToggleEdit,
}) => {
  return (
    <div className={styles.container}>
      <TodoTitle title={title} />
      <div className={styles.wrapper}>
        <Styled.Wrapper as={TodoTimerStart} startDate={startDate} />
        <Styled.Wrapper as={TodoTimerLength} timerLength={timerLength} />
        <Styled.Wrapper as={TodoType} type={type} />
        <TodoSettings onToggleEdit={onToggleEdit} />
      </div>
    </div>
  );
};

interface Props {
  todo: ITodo;
  onToggleEdit: () => void;
}

export default Todo;
