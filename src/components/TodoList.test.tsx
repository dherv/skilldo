import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { todoData } from "./Todo.stories";

const props = {
  todos: [
    { ...todoData, id: 1 },
    { ...todoData, id: 2 },
    { ...todoData, id: 3 },
  ],
  onToggleEdit: jest.fn(),
};

test("should display a list of todos", () => {
  render(<TodoList {...props} />);
  expect(screen.getAllByText("React Docs")).toHaveLength(3);
});

test("it should call onToggleEdit", () => {
  render(<TodoList {...props} />);
  fireEvent.click(screen.getAllByTitle("icon-settings")[0]);
  expect(props.onToggleEdit).toHaveBeenCalled();
});
