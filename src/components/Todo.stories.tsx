import React from "react";
import Todo from "./Todo";
import { actionsData } from "./TodoSettings.stories";

export default {
  component: Todo,
  title: "Todo",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*props$/,
};

const props = {
  title: "React Docs",
  type: "Book" as const,
  startDate: new Date(2020, 5, 1),
  timerLength: 30,
};

export const Default = () => <Todo {...props} {...actionsData} />;
