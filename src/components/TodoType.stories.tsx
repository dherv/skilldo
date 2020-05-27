import React from "react";
// import { action } from "@storybook/addon-actions";
import TodoType from "./TodoType";

export default {
  component: TodoType,
  title: "TodoTypeButton",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const typeBookData = "Book";
export const typeLanguageData = "Language";
export const typeFrameworkData = "Framework";
export const typeProjectData = "Project";

export const Default = () => <TodoType type={typeBookData} />;

export const Book = () => <TodoType type={typeBookData} />;

export const Language = () => <TodoType type={typeLanguageData} />;

export const Framework = () => <TodoType type={typeFrameworkData} />;

export const Project = () => <TodoType type={typeProjectData} />;
