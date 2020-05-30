import React, { FC } from "react";
import styles from "./TodoTitle.module.css";

const TodoTitle: FC<Props> = ({ title }) => {
  return <h5 className={styles.title}>{title}</h5>;
};

interface Props {
  title: string;
}

export default TodoTitle;
