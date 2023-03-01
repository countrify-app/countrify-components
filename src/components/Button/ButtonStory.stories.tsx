// MyComponent.stories.tsx
import React from "react";
import { ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export const ButtonStory: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

ButtonStory.args = {
  children: "Click here",
};

ButtonStory.storyName = "Button";
