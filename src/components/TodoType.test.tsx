import React from "react";
import { render, screen } from "@testing-library/react";
import TodoType from "./TodoType";

const props = {
  type: "Book" as const,
};

test("should display the title", () => {
  render(<TodoType {...props} />);
  expect(screen.getByText("B")).toBeInTheDocument();
});
