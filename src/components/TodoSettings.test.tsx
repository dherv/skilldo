import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoSettings from "./TodoSettings";

const props = {
  onToggleEdit: jest.fn(),
};

test("should display a button", () => {
  const { getByRole } = render(<TodoSettings {...props} />);
  const buttonElement = getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("click should toggle popover", () => {
  render(<TodoSettings {...props} />);
  fireEvent.click(screen.getByTitle("icon-settings"));
  expect(props.onToggleEdit).toHaveBeenCalled();
});
