import React from "react";
import { render } from "@testing-library/react";

import Logo from "./Logo";

describe("Logo", () => {
  test("renders the Logo component", () => {
    render(<Logo />);
  });
});