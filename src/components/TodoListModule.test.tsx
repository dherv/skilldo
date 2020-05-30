import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoListModule from "./TodoListModule";
import { todoData } from "./Todo.stories";

const props = {
  title: "June",
  todos: [
    { ...todoData, id: 1 },
    { ...todoData, id: 2 },
    { ...todoData, id: 3 },
  ],
  onToggleEdit: jest.fn(),
};

test("should display the list title", () => {
  render(<TodoListModule {...props} />);
  expect(screen.getByText("June")).toBeInTheDocument();
});

test("should display a list of todos", () => {
  render(<TodoListModule {...props} />);
  expect(screen.getAllByText("React Docs")).toHaveLength(3);
});

test("it should call onToggleEdit", () => {
  render(<TodoListModule {...props} />);
  fireEvent.click(screen.getAllByTitle("icon-settings")[0]);
  expect(props.onToggleEdit).toHaveBeenCalled();
});
