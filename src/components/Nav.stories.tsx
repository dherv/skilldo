import React from "react";
import Nav from "./Nav";

export default {
  component: Nav,
  title: "Nav",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const navData = {
  title: "SkillDo",
};

export const Default = () => <Nav {...navData} />;
