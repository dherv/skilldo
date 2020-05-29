import React from "react";
import TodoListModule from "./TodoListModule";
import { todoListTitleData } from "./TodoListTitle.stories";
import { defaultTodosData } from "./TodoList.stories";
import { actionsData } from "./Todo.stories";

export default {
  component: TodoListModule,
  title: "TodoListModule",
  excludeStories: /.*Data$/,
};

const propsData = {
  title: todoListTitleData.title,
  todos: defaultTodosData,
};

export const Default = () => <TodoListModule {...propsData} {...actionsData} />;
