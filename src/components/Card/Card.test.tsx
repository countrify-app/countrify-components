import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("renders the Card component", () => {
    render(<Card href="www.google.fr">This is a link</Card>);
  });
});