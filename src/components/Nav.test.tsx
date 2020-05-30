import React from "react";
import { render, screen } from "@testing-library/react";

import Nav from "./Nav";

const props = {
  title: "SkillDo",
};

test("it should display a the title", () => {
  render(<Nav {...props} />);
  expect(screen.getByText("SkillDo")).toBeInTheDocument();
});
