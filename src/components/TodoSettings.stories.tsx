import React from "react";
import { action } from "@storybook/addon-actions";

import TodoSettings from "./TodoSettings";
export default {
  component: TodoSettings,
  title: "TodoSettings",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onTogglePopover: action("onTogglePopover"),
};

export const Default = () => <TodoSettings {...actionsData} />;
