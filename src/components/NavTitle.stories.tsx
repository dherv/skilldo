import React from "react";
import NavTitle from "./NavTitle";

export default {
  component: NavTitle,
  title: "NavTitle",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const navTitleData = {
  title: "SkillDo",
};

export const Default = () => <NavTitle {...navTitleData} />;
