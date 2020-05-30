import React from "react";
import TodoTitle from "./TodoTitle";

export default {
  component: TodoTitle,
  title: "TodoTitle",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*props$/,
};

const props = {
  title: "React Docs",
};
export const Default = () => <TodoTitle {...props} />;
