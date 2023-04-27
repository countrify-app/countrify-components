import React from "react";
import { ComponentStory } from "@storybook/react";
import Card from "./Card"

export const CardStory: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

CardStory.args = {
  size: "small",
};

CardStory.storyName = "Card";
