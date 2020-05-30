import React from "react";
import TodoListTitle from "./TodoListTitle";

export default {
  component: TodoListTitle,
  title: "TodoListTitle",
  excludeStories: /.*Data$/,
};

export const todoListTitleData = {
  title: "June",
};

export const Default = () => <TodoListTitle {...todoListTitleData} />;
