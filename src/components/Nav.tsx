import React, { FC } from "react";
import NavTitle from "./NavTitle";
import styles from "./Nav.module.css";

const Nav: FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <NavTitle title={title} />
    </div>
  );
};

interface Props {
  title: string;
}

export default Nav;
