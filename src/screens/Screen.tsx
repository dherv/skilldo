import React, { FC } from "react";
import Nav from "../components/Nav";
import TodoListModule from "../components/TodoListModule";
import { todosData } from "./Screen.samples";
import { Container, Grid } from "./Screen.styled";
import styles from "./Screen.module.css";

const Screen: FC<Props> = () => {
  const title = "SkillDo";
  const backgroundColor = "rgba(255, 205, 210, 0.5)";
  const onToggleEdit = () => {};
  return (
    <Container backgroundColor={backgroundColor}>
      <header>
        <Nav title={title} />
      </header>
      <main className={styles.main}>
        <section>
          <Grid>
            {todosData.map(({ id, todos, title }) => (
              <TodoListModule
                key={id}
                todos={todos}
                title={title}
                onToggleEdit={onToggleEdit}
              />
            ))}
          </Grid>
        </section>
      </main>
    </Container>
  );
};

interface Props {}

export default Screen;
