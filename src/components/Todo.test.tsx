import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Todo from "./Todo";

//  prevent literal types (eg. 'Book') being 'widened' to type string
const props = {
  todo: {
    id: 1,
    title: "React Docs",
    type: "Book" as const,
    startDate: new Date(2020, 5, 1),
    timerLength: 30,
  },
  onToggleEdit: jest.fn(),
};

test("it should display a title", () => {
  render(<Todo {...props} />);
  expect(screen.getByText("React Docs")).toBeInTheDocument();
});

test("it should display a type", () => {
  render(<Todo {...props} />);
  expect(screen.getByText("B")).toBeInTheDocument();
});

test("it should display a date", () => {
  render(<Todo {...props} />);
  expect(screen.getByText("Jun 1")).toBeInTheDocument();
});

test("it should diplsay a timer", () => {
  render(<Todo {...props} />);
  expect(screen.getByText("30")).toBeInTheDocument();
});

test("it should call onToggleEdit", () => {
  render(<Todo {...props} />);
  fireEvent.click(screen.getByTitle("icon-settings"));
  expect(props.onToggleEdit).toHaveBeenCalled();
});
