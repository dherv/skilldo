import React from "react";
import { render, screen } from "@testing-library/react";
import TodoListTitle from "./TodoListTitle";

const props = {
  title: "June",
};
test("it should display the title", () => {
  render(<TodoListTitle {...props} />);
  expect(screen.getByText("June")).toBeInTheDocument();
});
