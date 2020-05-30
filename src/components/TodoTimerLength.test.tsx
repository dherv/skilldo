import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoTimerLength from "./TodoTimerLength";

const props = { timerLength: 30 };

test("should display a default number 30", () => {
  render(<TodoTimerLength {...props} />);
  expect(screen.getByText("30")).toBeInTheDocument();
});
