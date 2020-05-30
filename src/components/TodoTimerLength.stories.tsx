import React from "react";
import { action } from "@storybook/addon-actions";

import TodoTimerLength from "./TodoTimerLength";
export default {
  component: TodoTimerLength,
  title: "TodoTimerLength",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const todoTimerLengthData = 30;

export const Default = () => (
  <TodoTimerLength timerLength={todoTimerLengthData} />
);
