// MyComponent.stories.tsx
import React from "react";
import { ComponentStory } from "@storybook/react";
import { Card } from "./Card";

export const CardStory: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

CardStory.args = {
  children: "This is a card",
};

CardStory.storyName = "Card";
