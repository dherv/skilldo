import React from "react";
import Screen from "./Screen";
import { actionsData } from "../components/TodoSettings.stories";

export default {
  component: Screen,
  title: "Screen",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const screenData = {
  title: "SkillDo",
};

export const Default = () => <Screen {...screenData} {...actionsData} />;
