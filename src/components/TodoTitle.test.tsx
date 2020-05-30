import React from "react";
import { render, screen } from "@testing-library/react";
import TodoTitle from "./TodoTitle";

const props = {
  title: "React Docs",
};

test("should display the title", () => {
  render(<TodoTitle {...props} />);
  expect(screen.getByText(props.title)).toBeInTheDocument();
});
