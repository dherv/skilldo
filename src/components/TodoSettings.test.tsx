import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoSettings from "./TodoSettings";

const props = {
  onTogglePopover: jest.fn(),
};

test("renders learn react link", () => {
  const { getByRole } = render(<TodoSettings {...props} />);
  const buttonElement = getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("click should toggle popover", () => {
  render(<TodoSettings {...props} />);
  fireEvent.click(screen.getByRole("button"));
  expect(props.onTogglePopover).toHaveBeenCalled();
});
