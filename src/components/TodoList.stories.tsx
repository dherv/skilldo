import React from "react";
import TodoList from "./TodoList";
import { todoData } from "./Todo.stories";
import { actionsData } from "./Todo.stories";

export default {
  component: TodoList,
  title: "TodoList",
  excludeStories: /.*Data$/,
};

export const defaultTodosData = [
  { ...todoData, id: 1 },
  { ...todoData, id: 2 },
  { ...todoData, id: 3 },
];

export const Default = () => (
  <TodoList todos={defaultTodosData} {...actionsData} />
);
