import React from "react";
import { render, screen } from "@testing-library/react";

import NavTitle from "./NavTitle";

const props = {
  title: "SkillDo",
};

test("it should display a title", () => {
  render(<NavTitle {...props} />);
  expect(screen.getByText("SkillDo")).toBeInTheDocument();
});
