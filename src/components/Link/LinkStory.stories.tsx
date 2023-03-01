// MyComponent.stories.tsx
import React from "react";
import { ComponentStory } from "@storybook/react";
import { Link } from "./Link";

export const LinkStory: ComponentStory<typeof Link> = (args) => {
  return <Link {...args} />;
};

LinkStory.args = {
  children: "This is a link",
};

LinkStory.storyName = "Link";
