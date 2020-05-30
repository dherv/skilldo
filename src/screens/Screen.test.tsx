import React from "react";
import { render, screen } from "@testing-library/react";

import Screen from "./Screen";

const props = {};

test("it should display a the title", () => {
  render(<Screen {...props} />);
  expect(screen.getByText("SkillDo")).toBeInTheDocument();
});

test("it should display a TodoList title", () => {
  render(<Screen {...props} />);
  expect(screen.getByText("June")).toBeInTheDocument();
});
