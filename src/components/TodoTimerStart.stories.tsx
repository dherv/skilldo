import React from "react";

import TodoTimerStart from "./TodoTimerStart";
export default {
  component: TodoTimerStart,
  title: "TodoTimerStart",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const propsData = {
  startDate: new Date(2020, 5, 1),
};

export const Default = () => <TodoTimerStart {...propsData} />;
