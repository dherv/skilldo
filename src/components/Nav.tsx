import React, { FC } from "react";
import NavTitle from "./NavTitle";
import styles from "./Nav.module.css";

const Nav: FC<Props> = () => {
  const title = "SkillDo";
  return (
    <div className={styles.container}>
      <NavTitle title={title} />
    </div>
  );
};

interface Props {}

export default Nav;
